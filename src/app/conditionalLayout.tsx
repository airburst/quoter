"use client";

import { ReactNode } from "react";
import { useFlags } from "launchdarkly-react-client-sdk";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

type LayoutProps = {
  children: ReactNode;
};

export const ConditionalLayout = ({ children }: LayoutProps) => {
  const { hideHeaderAndFooter } = useFlags();
  const showHeaderAndFooter = !hideHeaderAndFooter;

  return (
    <>
      {showHeaderAndFooter && <Header />}
      <main>{children}</main>
      {showHeaderAndFooter && <Footer />}
    </>
  );
};
