import { ReactNode } from "react";
import { Metadata } from "next";
import "@simplybusiness/theme-sb";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { MainContent } from "@components/MainContent";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simply Business",
  description: "Generated using Simply Business Next.js app template",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <MainContent>{children}</MainContent>
        <Footer />
      </body>
    </html>
  );
}
