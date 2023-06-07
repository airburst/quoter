import Link from "next/link";
import { Info } from "@components/Info";

export const Footer = () => {
  return (
    <Info>
      Can't find the trade you are looking for?{" "}
      <Link href="/trade-chat">Try our chat search</Link>.
    </Info>
  );
};
