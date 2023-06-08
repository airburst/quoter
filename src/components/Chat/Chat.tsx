import { useCallback, useMemo, useState, useEffect, useRef } from "react";
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
  const chatLogRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const api = useMemo(() => new mockChatAPI(), []);
  const [log, setLog] = useState<Message[]>(INITIAL_MESSAGES);

  const scrollToBottom = () => {
    chatLogRef.current?.lastElementChild?.scrollIntoView({
      behavior: "smooth",
    });
  };

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

  const handlePrompt = useCallback(async () => {
    const serverMessage = await api.getAnswer();

    if (serverMessage) {
      setLog([...log, serverMessage]);

      return;
    }
  }, [api, log]);

  const handleFocus = () => {
    setIsOpen(true);
  };

  const containerClasses = clsx(styles.container, {
    [styles.containerOpen]: isOpen,
  });

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp, { passive: true });

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");

      return;
    }

    document.body.classList.remove("no-scroll");
  }, [isOpen]);

  useEffect(() => {
    if (chatLogRef.current && isOpen) {
      scrollToBottom();
    }
  }, [log, isOpen]);

  return (
    <div className={containerClasses}>
      <Flex vertical height="100%">
        <ChatLog ref={chatLogRef} log={log} onClick={handlePrompt} />
        <ChatInput
          onSubmit={handleMessage}
          onClick={handleFocus}
          isActive={isOpen}
        />
      </Flex>
    </div>
  );
};
