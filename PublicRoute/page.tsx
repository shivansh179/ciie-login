'use client';

// components/PublicRoute.js
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { ReactNode } from 'react';

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/Dashboard');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>; // You can render a loading spinner here
  }

  if (!user) {
    return <>{children}</>;
  }

  return null;
};

export default PublicRoute;
