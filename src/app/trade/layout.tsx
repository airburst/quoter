"use client";

import { ReactNode } from "react";
import { Navigation } from "@components/Navigation";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navigation completed={["50"]} />
      {children}
    </>
  );
}
