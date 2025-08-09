import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Texas Triathlon and Cycling",
  description: "Official club website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">        
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
