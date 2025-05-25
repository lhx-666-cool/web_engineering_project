import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Admin Panel",
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
