import { ReactNode } from "react";
import { Metadata } from "next";
import { sharedMetadata } from "../metadata";

export const metadata: Metadata = sharedMetadata;

type PageLayoutProps = {
  children: ReactNode;
};

// eslint-disable-next-line react/function-component-definition
export default function PageLayout({ children }: PageLayoutProps) {
  return children;
}
