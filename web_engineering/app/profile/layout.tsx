import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile Page",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      { children }
    </>
  );
}
