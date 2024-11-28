import { SessionProvider } from "next-auth/react";

export const SeSSionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
