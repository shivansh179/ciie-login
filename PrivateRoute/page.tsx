// components/PrivateRoute.js
import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
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
    return <>{children}</>; // Ensure children are rendered properly
  }

  return null;
};

export default PrivateRoute;
