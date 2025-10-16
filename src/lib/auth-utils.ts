import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth';
import { redirect } from 'next/navigation';
import type { User } from '@/models/User';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI!);

/**
 * Get authenticated user session (for server components)
 */
export async function getAuthSession() {
  return await getServerSession(authOptions);
}

/**
 * Require authentication or redirect to login
 */
export async function requireAuth() {
  const session = await getAuthSession();
  
  if (!session?.user) {
    redirect('/auth/login');
  }
  
  return session;
}

/**
 * Get full user data from database
 */
export async function getCurrentUser(): Promise<User | null> {
  const session = await getAuthSession();
  
  if (!session?.user?.id) {
    return null;
  }

  try {
    await client.connect();
    const users = client.db().collection<User>('users');
    
    const user = await users.findOne({ 
      $or: [
        { id: session.user.id },
        { email: session.user.email }
      ]
    });
    
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  } finally {
    await client.close();
  }
}

/**
 * Check if user has access to a specific plan feature
 */
export function hasAccess(userPlan: string, requiredPlan: string): boolean {
  const planHierarchy = ['starter', 'business', 'premium'];
  const userPlanIndex = planHierarchy.indexOf(userPlan);
  const requiredPlanIndex = planHierarchy.indexOf(requiredPlan);
  
  return userPlanIndex >= requiredPlanIndex;
}

/**
 * Check if user is within trial period
 */
export function isInTrial(user: User): boolean {
  if (!user.trialEndsAt) return false;
  return new Date() < user.trialEndsAt;
}

/**
 * Get days remaining in trial
 */
export function getTrialDaysRemaining(user: User): number {
  if (!user.trialEndsAt) return 0;
  
  const now = new Date();
  const trialEnd = user.trialEndsAt;
  
  if (now >= trialEnd) return 0;
  
  const diffTime = trialEnd.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
}

/**
 * Check if user has exceeded quota
 */
export function hasExceededQuota(user: User): boolean {
  return user.prospectsUsed >= user.prospectsQuota;
}

/**
 * Get quota usage percentage
 */
export function getQuotaUsagePercentage(user: User): number {
  return Math.round((user.prospectsUsed / user.prospectsQuota) * 100);
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate password strength
 */
export function isValidPassword(password: string): boolean {
  // At least 8 characters, one uppercase, one lowercase, one number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

/**
 * Generate secure password reset token
 */
export function generateResetToken(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

/**
 * Check if user email is verified
 */
export function isEmailVerified(user: User): boolean {
  return user.emailVerified !== null;
}