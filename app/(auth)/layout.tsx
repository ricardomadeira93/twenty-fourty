import { UserButton } from '@clerk/nextjs';

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex items-center justify-center h-screen">
        <UserButton afterSignOutUrl='/'/>
        {children}
      </div>
    );
  };