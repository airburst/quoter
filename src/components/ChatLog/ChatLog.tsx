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
import { Stack } from "@twilio-paste/stack";
import { Button } from "@twilio-paste/button";
import { Fragment } from "react";
import { Flex } from "@twilio-paste/flex";
import styles from "./ChatLog.module.css";

const CHAT_MESSAGES = [
  {
    id: "1",
    server: {
      message: "Hi, please describe what your business does.",
    },
    client: {
      message: "I take photographs at weddings",
      time: "3:45 PM",
    },
  },
  {
    id: "2",
    server: {
      message:
        "Great, we insure thousands of amazing photographers. Do you run a studio or sell prints and gifts online?",
    },
    client: {
      message:
        "I don’t have a studio, I only work at wedding venues and create prints and albums for my clients.",
      time: "3:47 PM",
    },
  },
  {
    id: "3",
    server: {
      message:
        "Thanks, based on what you have told us our insurers would define what you do as",
      suggestion: {
        title: "Photographer",
        description:
          "We define photography as the art or practice of taking, editing, and processing photographs.",
      },
    },
  },
  {
    id: "4",
    server: {
      message: "Are you happy to get insurance quotes with this match?",
      prompts: [
        {
          message: "Yes, let's continue",
          handleClick: () => console.info("yes"),
        },
        {
          message: "No, it's not quite right",
          handleClick: () => console.info("no"),
        },
      ],
    },
  },
];

export const ChatLog = () => {
  return (
    <div className={styles.container}>
      <PasteChatLog>
        {CHAT_MESSAGES.map(entry => {
          const { server, client, id } = entry;

          return (
            <Fragment key={id}>
              <Heading as="h2" variant="heading20" marginBottom="space0">
                {server.message}
              </Heading>
              {server.suggestion && (
                <Box
                  backgroundColor="colorBackgroundDecorative10Weakest"
                  padding="space50"
                  marginBottom="space50"
                  borderLeftColor="colorBorderPrimaryStrong"
                  borderLeftWidth="borderWidth30"
                  borderLeftStyle="solid"
                >
                  <Heading as="h2" variant="heading20" marginBottom="space0">
                    {server.suggestion.title}
                  </Heading>
                  <Text as="p" fontSize="fontSize40">
                    {server.suggestion.description}
                  </Text>
                </Box>
              )}
              {server.prompts && (
                <Stack spacing="space40" orientation="vertical">
                  {server.prompts.map(prompt => {
                    return (
                      <Flex key={prompt.message} hAlignContent="right">
                        <Button variant="primary" onClick={prompt.handleClick}>
                          {prompt.message}
                        </Button>
                      </Flex>
                    );
                  })}
                </Stack>
              )}
              {client?.message && (
                <ChatMessage variant="outbound">
                  <ChatBubble>{client.message}</ChatBubble>
                  <ChatMessageMeta aria-label={`said by you at ${client.time}`}>
                    <ChatMessageMetaItem>{client.time}</ChatMessageMetaItem>
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
