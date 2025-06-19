import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import NavbarWrapper from "@/components/Navbarshow";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SajiloRent | Renting Made Easy",
  description: "Renting Made Easy",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <SessionProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NavbarWrapper />
          {children}
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
