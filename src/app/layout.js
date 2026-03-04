import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Дом на изкуството - Творчество на талантливи деца",
  description: "Платформа за представяне на творчеството на талантливи деца",
  icons: {
    icon: '/images/favicon-48x48.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FirebaseAnalytics />
        {children}
      </body>
    </html>
  );
}
