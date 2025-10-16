import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentification | ProspectPro',
  description: 'Connectez-vous à votre compte ProspectPro',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-layout">
      {children}
    </div>
  );
}