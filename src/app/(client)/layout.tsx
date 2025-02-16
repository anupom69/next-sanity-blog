import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers";
import Nav from "./components/Navigation";

const fira_code = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fira_code.className}`}>
        <Providers>
          <Nav />
          <main className="container mx-auto max-w-7xl p-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
