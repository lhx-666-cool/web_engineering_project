import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Theme from '@/components/theme'
import Navbar from "@/components/navbar";
import MuiThemeProviderWrapper from "@/components/MuiThemeProviderWrapper";
import {Providers} from "@/app/providers";
import React from "react";
// import {ThemeProvider} from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chat With AI",
  description: "Chat With AI",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <Providers>
      <MuiThemeProviderWrapper>
        <div className="bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-stone-800 w-full h-[100vh] flex flex-col">
          <div className="navbar h-18 w-full">
            <Navbar/>
          </div>
          <div className="flex-1 min-h-0">
            {children}
          </div>
        </div>
        <div className="theme fixed bottom-10 right-10 z-100">
          <Theme/>
        </div>
      </MuiThemeProviderWrapper>
    </Providers>
    </body>

    </html>

  );
}
