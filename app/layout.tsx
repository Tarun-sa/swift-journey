
import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import "../styles/index.scss";

const outfit = Outfit({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swift Journey",
  description: "A one solution for your cab",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={outfit.className}>
          <Navbar />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
