'use client';

import { useAuth } from '@/lib/useAuth';
import { ReactNode } from 'react';

export function AuthWrapper({ children }: { children: ReactNode }) {
  const { session, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Please sign in</div>;
  }

  return <>{children}</>;
}