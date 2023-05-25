"use client";

import { ReactNode } from "react";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import CustomTheme from "../themes/theme.json";
import "../styles/globals.css";
import "../styles/fonts.css";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {/* @ts-expect-error generics in Paste theme */}
        <CustomizationProvider baseTheme="default" theme={CustomTheme}>
          <Header />
          <main>{children}</main>
          <Footer />
        </CustomizationProvider>
      </body>
    </html>
  );
}
