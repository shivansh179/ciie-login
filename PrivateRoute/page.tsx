'use client'
// components/PrivateRoute.js
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

const PrivateRoute = ( {children}) => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/Login');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>; // You can render a loading spinner here
  }

  if (user) {
    return children;
  }

  return null;
};

export default PrivateRoute;
