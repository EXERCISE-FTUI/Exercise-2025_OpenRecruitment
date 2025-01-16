import Footer from "@/components/footer/page";
import "./globals.css";
import Navbar from "@/components/navbar/page";
import { Inter } from "next/font/google";

const inter = Inter({ weight: '700' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white_2`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
