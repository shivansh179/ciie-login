'use client'

// pages/Dashboard.js
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import PrivateRoute from '../../PrivateRoute/page';

const Dashboard = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/Login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-semibold">Welcome to the Dashboard</h1>
      {/* Your dashboard content */}
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Logout
      </button>
    </div>
  );
};

export default function DashboardPage() {
  return (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  );
}
