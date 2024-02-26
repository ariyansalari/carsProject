import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, TopNavBar } from "@/ui";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"relative"}>
        <header className="absolute z-10 w-full ">
       
            <TopNavBar />
        </header>
        <main>{children}</main>
        <footer >
          <Footer />
        </footer>
      </body>
    </html>
  );
}
