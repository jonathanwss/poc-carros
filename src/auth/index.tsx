import React, { createContext, useContext, useEffect, useState } from 'react';
import * as yup from 'yup';


type Email = string;
type Password = string;

type LoginResult = {
  success: boolean;
  message: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: Email, password: Password) => LoginResult;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const isEmailValid = (email: Email): boolean => {
  const emailSchema = yup.string().email().required();
  return emailSchema.isValidSync(email);
};

const isPasswordValid = (password: Password): boolean => {
  return !!password;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedIsAuthorized = localStorage.getItem('isAuthorized');

    if (storedIsAuthorized === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email: Email, password: Password): LoginResult => {
    if (!isEmailValid(email)) {
      return { success: false, message: 'Email inválido' };
    }

    if (!isPasswordValid(password)) {
      return { success: false, message: 'Senha não preenchida' };
    }

    setIsAuthenticated(true);
    localStorage.setItem('isAuthorized', 'true');

    return { success: true, message: 'Login realizado com sucesso' };
  };

  const logout = () => {
    setIsAuthenticated(false);

    localStorage.removeItem('isAuthorized');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser utilizado dentro do AuthProvider');
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
