import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { MongoClient } from 'mongodb';
import type { User, CreateUserData } from '@/models/User';

const client = new MongoClient(process.env.MONGODB_URI!);

interface RegisterRequestBody extends CreateUserData {
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: RegisterRequestBody = await request.json();
    const { 
      firstName, 
      lastName, 
      email, 
      password, 
      company, 
      companySize, 
      sector 
    } = body;

    // Validation
    if (!firstName || !lastName || !email || !password || !company) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Le mot de passe doit contenir au moins 8 caractères' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Password strength validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      return NextResponse.json(
        { error: 'Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre' },
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db();
    const users = db.collection<User>('users');

    // Check if user already exists
    const existingUser = await users.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Un compte existe déjà avec cet email' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const newUser: Omit<User, '_id'> = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      company: company.trim(),
      companySize,
      sector,
      provider: 'credentials',
      plan: 'starter',
      trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
      prospectsQuota: 200, // Starter plan quota
      prospectsUsed: 0,
      isActive: true,
      emailVerified: null, // Will be verified via email
      createdAt: new Date(),
      settings: {
        notifications: {
          email: true,
          browser: true,
          marketing: false,
        },
        timezone: 'Europe/Paris',
        language: 'fr',
      },
    };

    const result = await users.insertOne(newUser);

    // TODO: Send verification email
    // await sendVerificationEmail(email, result.insertedId.toString());

    return NextResponse.json(
      { 
        message: 'Compte créé avec succès',
        userId: result.insertedId.toString(),
        requiresEmailVerification: true
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de l\'inscription' },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}