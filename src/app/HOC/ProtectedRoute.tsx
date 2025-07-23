import { useAuth } from  "../context/auth";
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const withProtectedRoute = (WrappedComponent: any) => {
  return (props: any) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push('/login');
      }
    }, [user, router]);

    return user ? <WrappedComponent {...props} /> : null;
  };
};

export default withProtectedRoute;
