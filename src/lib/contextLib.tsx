import { useContext, createContext } from "react";

export interface IAppContext { 
    isAuthenticated: boolean; 
    isAuthenticating: boolean;
    userHasAuthenticated: React.Dispatch<React.SetStateAction<boolean>>; 
}

export const AppContext = createContext<IAppContext>({ 
    isAuthenticated: false,
    isAuthenticating: false,
    userHasAuthenticated: () => {} 
});

export const useAppContext = () => {
  return useContext(AppContext);
}