import type { Metadata } from "next";
import { Raleway, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Raleway({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio: Dorsa",
  description: "Portfolio Website",
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
        {children}
      </body>
    </html>
  );
}
