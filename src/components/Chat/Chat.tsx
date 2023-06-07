import { useCallback, useMemo, useState } from "react";
import { Flex } from "@twilio-paste/flex";
import { ChatLog } from "@components/Chat/ChatLog";
import { ChatInput } from "@components/Chat/ChatInput";
import { getCurrentTime } from "@utils/dates";
import { randomId } from "@utils/general";
import { mockChatAPI } from "@/mocks/mockChatAPI";
import styles from "./Chat.module.css";
import { Message } from "./types";
import clsx from "clsx";

const INITIAL_MESSAGES: Message[] = [
  {
    id: randomId(),
    type: "server",
    contents: {
      message: "Hi, please describe what your business does.",
    },
    time: getCurrentTime(),
  },
];

export const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const api = useMemo(() => new mockChatAPI(), []);
  const [log, setLog] = useState<Message[]>(INITIAL_MESSAGES);

  const handleMessage = useCallback(
    async (message: Message) => {
      const serverMessage = await api.getAnswer();

      if (serverMessage) {
        setLog([...log, message, serverMessage]);

        return;
      }

      setLog([...log, message]);
    },
    [api, log],
  );

  const handleFocus = () => {
    setIsOpen(true);
  };

  const containerClasses = clsx(styles.container, {
    [styles.containerOpen]: isOpen,
  });

  return (
    <div className={containerClasses}>
      <Flex vertical height="100%">
        <ChatLog log={log} />
        <ChatInput
          onSubmit={handleMessage}
          onFocus={handleFocus}
          isActive={isOpen}
        />
      </Flex>
    </div>
  );
};
