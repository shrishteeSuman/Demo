import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import {Suspense} from "react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <div className='main-page-container'>
            <Navigation/>
                {children}
        </div>
      <Footer/>
      </body>
    </html>
  );
}
