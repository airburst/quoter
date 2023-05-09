import { ReactNode } from "react";
import "@simplybusiness/theme-sb";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { MainContent } from "@components/MainContent";
import "./globals.css";

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
