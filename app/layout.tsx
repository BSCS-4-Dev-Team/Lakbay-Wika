import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PinaSpeak",
  description: "PinaSpeak Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <NavBar></NavBar>
      <div className={inter.className}>{children}</div>
      <Footer></Footer>
    </html>
  );
}
