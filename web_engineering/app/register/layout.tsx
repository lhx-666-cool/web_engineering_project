import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Register Page",
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
