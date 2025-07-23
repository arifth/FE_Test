import { createContext, useContext, useState, useEffect, Context } from 'react';
import { useRouter } from 'next/router';
import { ConstructionOutlined } from '@mui/icons-material';

const AuthContext: Context<any> = createContext(null);

export const AuthProvider = ({ children }:{children: React.ReactNode}) => {
  const [user, setUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Fetch the user's auth state from your authentication service
    // and set the user state accordingly
  }, []);

  const login = async (email: any, password: any) => {
    console.log(email, password);
    // Implement your login logic here
  };

  const logout = async () => {
    // Implement your logout logic here
  };

  return (
    <AuthContext.Provider value={{  user,login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
