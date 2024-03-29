import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import { Header } from "@/components/header/Header";
import { Root as RootProvider } from "@/providers/Root";
import "./globals.scss";

const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "KeyBlaze",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={questrial.className}>
        <RootProvider>
          <div className="wrapper">
            <Header />
            {children}
          </div>
        </RootProvider>
      </body>
    </html>
  );
}
