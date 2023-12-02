import React from "react";
import { LoadingOverlay } from "@mantine/core";

import { AuthContext } from "../context";
import { IEntity } from "../types";
import useProfile from "../use-profile";
import { clearSession } from "@/services/store";
import { useRouter } from "next/router";

interface AuthProps {
  children: React.ReactNode;
}

const Auth = ({ children }: AuthProps) => {
  const [{ user, isLoading }, setState] = useProfile();
  const navigete = useRouter();

  if (isLoading) return <LoadingOverlay visible />;

  const methods = {
    login: (user: IEntity.User) => setState((prev) => ({ ...prev, user })),
    logout: () => {
      clearSession();
      setState((prev) => ({ ...prev, user: null, verification: false }));
      navigete.push("/");
    },
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, methods }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
