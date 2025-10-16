import { ObjectId } from 'mongodb';

export interface User {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password?: string; // Optional for OAuth users
  company: string;
  companySize?: string;
  sector?: string;
  plan: 'starter' | 'business' | 'premium';
  trialEndsAt?: Date;
  prospectsQuota: number;
  prospectsUsed: number;
  
  // OAuth fields
  provider?: 'credentials' | 'google' | 'github';
  image?: string;
  
  // Status fields
  isActive: boolean;
  emailVerified?: Date | null;
  
  // Timestamps
  createdAt: Date;
  updatedAt?: Date;
  lastLoginAt?: Date;
  
  // Subscription fields
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  subscriptionStatus?: 'active' | 'inactive' | 'trial' | 'cancelled';
  
  // Settings
  settings?: {
    notifications: {
      email: boolean;
      browser: boolean;
      marketing: boolean;
    };
    timezone: string;
    language: string;
  };
}

export interface CreateUserData {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  company: string;
  companySize?: string;
  sector?: string;
  provider?: 'credentials' | 'google' | 'github';
}

export interface UpdateUserData {
  firstName?: string;
  lastName?: string;
  company?: string;
  companySize?: string;
  sector?: string;
  plan?: 'starter' | 'business' | 'premium';
  prospectsQuota?: number;
  prospectsUsed?: number;
  isActive?: boolean;
  settings?: Partial<User['settings']>;
  updatedAt?: Date;
}