import { Heading } from "@twilio-paste/heading";
import {
  ChatLog as PasteChatLog,
  ChatMessage,
  ChatBubble,
  ChatMessageMeta,
  ChatMessageMetaItem,
} from "@twilio-paste/chat-log";
import { Box } from "@twilio-paste/box";
import { Text } from "@twilio-paste/text";
import { ForwardedRef, forwardRef } from "react";
import { Prompts } from "./Prompts";
import { Message } from "../types";
import { AnimatedBox } from "./AnimatedBox";
import styles from "./ChatLog.module.css";

type ChatLogProps = {
  log: Message[];
  onClick: () => void;
};

export const ChatLog = forwardRef(
  ({ log, onClick }: ChatLogProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={styles.container}>
        <PasteChatLog>
          {log.map(entry => {
            const {
              id,
              type,
              contents: { message, suggestion },
              time,
            } = entry;

            return (
              <div key={id} ref={ref}>
                {type === "server" && (
                  <AnimatedBox>
                    <Heading as="h2" variant="heading20" marginBottom="space0">
                      {message}
                    </Heading>
                  </AnimatedBox>
                )}
                {suggestion && (
                  <AnimatedBox>
                    <Box
                      backgroundColor="colorBackgroundDecorative10Weakest"
                      padding="space50"
                      marginY="space50"
                      borderLeftColor="colorBorderPrimaryStrong"
                      borderLeftWidth="borderWidth30"
                      borderLeftStyle="solid"
                    >
                      <Heading
                        as="h2"
                        variant="heading20"
                        marginBottom="space0"
                      >
                        {suggestion.title}
                      </Heading>
                      <Text as="p" fontSize="fontSize40">
                        {suggestion.description}
                      </Text>
                    </Box>
                    <Heading as="h2" variant="heading20">
                      {suggestion.message}
                    </Heading>
                    <Prompts onClick={onClick} />
                  </AnimatedBox>
                )}
                {type === "client" && (
                  <AnimatedBox delay={0}>
                    <div className={styles.chatBubble}>
                      <ChatMessage variant="outbound">
                        <ChatBubble>{message}</ChatBubble>
                        <ChatMessageMeta aria-label={`said by you at ${time}`}>
                          <ChatMessageMetaItem>{time}</ChatMessageMetaItem>
                        </ChatMessageMeta>
                      </ChatMessage>
                    </div>
                  </AnimatedBox>
                )}
              </div>
            );
          })}
        </PasteChatLog>
      </div>
    );
  },
);

ChatLog.displayName = "ChatLog";
