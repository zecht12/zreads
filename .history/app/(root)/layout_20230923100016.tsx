import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import Leftsidebar from "@/components/shared/Leftsidebar";
import Rightsidebar from "@/components/shared/Rightsidebar";
import Bottombar from "@/components/shared/Bottombar";
import Head from "next/head";
import Favicon from '../favicon.ico';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zreads",
  description: "Make day all out",
  icons: {
    icon: '../favicon',
  },
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={inter.className}>
          <Topbar/>
          <main>
            <Leftsidebar/>
            <section className="main-container">
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </section>
            <Rightsidebar/>
          </main>
          <Bottombar/>
        </body>
      </html>
    </ClerkProvider>
  );
}
