"use client";

import { ReactNode } from "react";
import { Navigation } from "@components/Navigation";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navigation progress={["100", "100", "10"]} />
      {children}
    </>
  );
}
