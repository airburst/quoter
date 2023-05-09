"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import styles from "./Navigation.module.css";

type ActiveLinkProps = {
  href: string;
};

export const ActiveLink = ({
  href,
  ...otherProps
}: PropsWithChildren<ActiveLinkProps>) => {
  const pathname = usePathname();
  const activeClassName = pathname === href ? styles.activeLink : "";

  return (
    <Link
      href={href}
      className={`${styles.link} ${activeClassName}`}
      {...otherProps}
    />
  );
};
