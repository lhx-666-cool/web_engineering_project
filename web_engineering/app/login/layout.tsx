import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
  description: "Login Page",
};

export default function LoginLayout({
                                      children,
                                    }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
