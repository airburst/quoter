import { ReactNode } from "react";
import styles from "./ChatContainer.module.css";
import { Flex } from "@twilio-paste/flex";

type ChatContainerProps = {
  children: ReactNode;
};

export const ChatContainer = ({ children }: ChatContainerProps) => {
  return (
    <div className={styles.container}>
      <Flex vertical height="100%">
        {children}
      </Flex>
    </div>
  );
};
