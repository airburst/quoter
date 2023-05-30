import Link from "next/link";
import { Info } from "@components/Info";

export const Footer = () => {
  return (
    <Info>
      You can also choose from the{" "}
      <Link href="#">full list of professions</Link>.
    </Info>
  );
};
