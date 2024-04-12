"use client";

import logout from "@/actions/logout";
import { User } from "@/actions/obter-usuario";
import validarToken from "@/actions/validar-token";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type IUserContext = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

const UserContext = createContext<IUserContext | null>(null);

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "O provider precisa envolver os componentes que utilizam o estado"
    );
  }
  return context;
}

export function UserContextProvider({
  children,
  user,
}: {
  children: ReactNode;
  user: User | null;
}) {
  const [userState, setUser] = useState<User | null>(user);

  useEffect(() => {
    async function validate() {
      const { ok } = await validarToken();
      if (!ok) await logout();
    }

    if (userState) validate();
  }, [userState]);

  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
