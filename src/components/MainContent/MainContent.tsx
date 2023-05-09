import { ReactNode } from "react";
import styles from "./MainContent.module.css";

type Props = {
  children: ReactNode;
};

export const MainContent = ({ children }: Props) => {
  return <main className={styles.main}>{children}</main>;
};
