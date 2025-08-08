import type { Metadata } from "next";
import Navigation from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Texas Triathlon and Cycling",
  description: "Official club website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
