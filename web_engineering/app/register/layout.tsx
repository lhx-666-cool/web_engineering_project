import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat",
  description: "Chat Page",
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
