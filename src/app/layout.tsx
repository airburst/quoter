"use client";

import { ComponentType, ReactNode } from "react";
import { withLDProvider } from "launchdarkly-react-client-sdk";
import { CustomizationProvider } from "@twilio-paste/customization";
import { ConditionalLayout } from "./conditionalLayout";
import CustomTheme from "../themes/theme.json";
import "../styles/globals.css";
import "../styles/fonts.css";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {/* @ts-expect-error generics in Paste theme */}
        <CustomizationProvider baseTheme="default" theme={CustomTheme}>
          <ConditionalLayout>{children}</ConditionalLayout>
        </CustomizationProvider>
      </body>
    </html>
  );
};

export default withLDProvider({
  clientSideID: "646e39d1dcc9a5126764267f",
})(RootLayout as ComponentType<{}>);
