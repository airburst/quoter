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
import { Fragment } from "react";
import { Prompts } from "./Prompts";
import { Message } from "../types";
import styles from "./ChatLog.module.css";

type ChatLogProps = {
  log: Message[];
};

export const ChatLog = ({ log }: ChatLogProps) => {
  return (
    <div className={styles.container}>
      <PasteChatLog>
        {log.map(entry => {
          const {
            id,
            type,
            contents: { message, suggestion, prompts },
            time,
          } = entry;

          return (
            <Fragment key={id}>
              {type === "server" && (
                <Heading as="h2" variant="heading20" marginBottom="space0">
                  {message}
                </Heading>
              )}
              {suggestion && (
                <Box
                  backgroundColor="colorBackgroundDecorative10Weakest"
                  padding="space50"
                  marginBottom="space50"
                  borderLeftColor="colorBorderPrimaryStrong"
                  borderLeftWidth="borderWidth30"
                  borderLeftStyle="solid"
                >
                  <Heading as="h2" variant="heading20" marginBottom="space0">
                    {suggestion.title}
                  </Heading>
                  <Text as="p" fontSize="fontSize40">
                    {suggestion.description}
                  </Text>
                </Box>
              )}
              {prompts && <Prompts />}
              {type === "client" && (
                <ChatMessage variant="outbound">
                  <ChatBubble>{message}</ChatBubble>
                  <ChatMessageMeta aria-label={`said by you at ${time}`}>
                    <ChatMessageMetaItem>{time}</ChatMessageMetaItem>
                  </ChatMessageMeta>
                </ChatMessage>
              )}
            </Fragment>
          );
        })}
      </PasteChatLog>
    </div>
  );
};
