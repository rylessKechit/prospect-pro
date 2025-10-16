"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Target, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  Chrome,
  User,
  Building2,
  Users,
  CheckCircle,
  AlertCircle,
  Shield
} from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    company: '',
    companySize: '',
    sector: '',
    acceptTerms: false,
    acceptNewsletter: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!formData.acceptTerms) {
      setError('Vous devez accepter les conditions d\'utilisation');
      setIsLoading(false);
      return;
    }

    try {
      // TODO: Implement registration logic
      console.log('Registration attempt:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect to dashboard or email verification
      // router.push('/auth/verify-email');
      
    } catch (err) {
      setError('Une erreur est survenue lors de l\'inscription');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="h-10 w-10 bg-slate-900 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">ProspectPro</span>
          </Link>
          <p className="text-slate-600 mt-2">Créez votre compte gratuit</p>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Inscription gratuite</CardTitle>
            <CardDescription>
              Commencez votre essai de 14 jours dès maintenant
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            
            {/* Social Registration */}
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full h-12" 
                onClick={() => {/* TODO: signIn('google') */}}
              >
                <Chrome className="h-5 w-5 mr-2" />
                S'inscrire avec Google
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-500">Ou remplissez le formulaire</span>
              </div>
            </div>

            {/* Error Alert */}
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>

                {/* Registration Form */}
                <div className="space-y-4">
                
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                        id="firstName"
                        type="text"
                        placeholder="Jean"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="pl-10"
                        required
                        />
                    </div>
                    </div>
                    
                    <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input
                        id="lastName"
                        type="text"
                        placeholder="Dupont"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                    />
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <Label htmlFor="email">Email professionnel *</Label>
                    <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                        id="email"
                        type="email"
                        placeholder="jean.dupont@entreprise.fr"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="pl-10"
                        required
                    />
                    </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe *</Label>
                    <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="8 caractères minimum"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="pl-10 pr-10"
                        required
                        minLength={8}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                    >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                    </div>
                    <div className="text-xs text-slate-500">
                    Au moins 8 caractères avec une majuscule et un chiffre
                    </div>
                </div>

                {/* Company Info */}
                <div className="space-y-2">
                    <Label htmlFor="company">Entreprise *</Label>
                    <div className="relative">
                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                        id="company"
                        type="text"
                        placeholder="Nom de votre entreprise"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="pl-10"
                        required
                    />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                    <Label>Taille de l'entreprise</Label>
                    <Select onValueChange={(value) => handleInputChange('companySize', value)}>
                        <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="1-5">1-5 employés</SelectItem>
                        <SelectItem value="6-20">6-20 employés</SelectItem>
                        <SelectItem value="21-50">21-50 employés</SelectItem>
                        <SelectItem value="51-100">51-100 employés</SelectItem>
                        <SelectItem value="100+">100+ employés</SelectItem>
                        </SelectContent>
                    </Select>
                    </div>

                    <div className="space-y-2">
                    <Label>Secteur d'activité</Label>
                    <Select onValueChange={(value) => handleInputChange('sector', value)}>
                        <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="conseil">Conseil & Services</SelectItem>
                        <SelectItem value="tech">Tech & Software</SelectItem>
                        <SelectItem value="industrie">Industrie</SelectItem>
                        <SelectItem value="commerce">Commerce</SelectItem>
                        <SelectItem value="sante">Santé</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                    </Select>
                    </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                    <Checkbox 
                        id="terms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) => handleInputChange('acceptTerms', checked as boolean)}
                    />
                    <div className="text-sm leading-relaxed">
                        <Label htmlFor="terms" className="cursor-pointer">
                        J'accepte les{' '}
                        <Link href="/cgu" className="text-blue-600 hover:text-blue-800">
                            conditions d'utilisation
                        </Link>{' '}
                        et la{' '}
                        <Link href="/politique-confidentialite" className="text-blue-600 hover:text-blue-800">
                            politique de confidentialité
                        </Link>
                        </Label>
                    </div>
                    </div>

                    <div className="flex items-start space-x-3">
                    <Checkbox 
                        id="newsletter"
                        checked={formData.acceptNewsletter}
                        onCheckedChange={(checked) => handleInputChange('acceptNewsletter', checked as boolean)}
                    />
                    <Label htmlFor="newsletter" className="text-sm cursor-pointer">
                        Je souhaite recevoir les conseils en prospection et les nouveautés ProspectPro
                    </Label>
                    </div>
                </div>

                <Button 
                    type="submit" 
                    className="w-full h-12 bg-slate-900 hover:bg-slate-800"
                    disabled={isLoading}
                    onClick={handleSubmit}
                >
                    {isLoading ? (
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Création du compte...
                    </div>
                    ) : (
                    <>
                        Créer mon compte gratuit
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </>
                    )}
                </Button>
              </div>
            </form>

            {/* Login link */}
            <div className="text-center text-sm">
              <span className="text-slate-600">Déjà un compte ? </span>
              <Link href="/auth/login" className="text-blue-600 hover:text-blue-800 font-medium">
                Se connecter
              </Link>
            </div>

            {/* Security & Benefits */}
            <div className="bg-slate-50 p-4 rounded-lg space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium text-slate-900">14 jours d'essai gratuit</div>
                  <div className="text-slate-600">Accès complet à toutes les fonctionnalités</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium text-slate-900">Données sécurisées</div>
                  <div className="text-slate-600">Hébergement France • Conformité RGPD</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-slate-500">
          <div className="flex items-center justify-center gap-4">
            <Link href="/mentions-legales" className="hover:text-slate-700">
              Mentions légales
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-700">
              Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}