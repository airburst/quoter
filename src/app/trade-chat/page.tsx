"use client";

import { Section } from "@components/Section";
import { ChatLog } from "@components/ChatLog";
import { ChatInput } from "@components/ChatInput";
import { ChatContainer } from "@components/ChatContainer";

// eslint-disable-next-line react/function-component-definition
export default function TradeChat() {
  return (
    <Section>
      <ChatContainer>
        <ChatLog />
        <ChatInput />
      </ChatContainer>
    </Section>
  );
}
