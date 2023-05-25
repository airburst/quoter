"use client";

import { ReactNode } from "react";
import { Navigation } from "@components/Navigation";

type PageLayoutProps = {
  children: ReactNode;
};

export const runtime = 'edge';

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navigation progress={["50"]} />
      {children}
    </>
  );
}
