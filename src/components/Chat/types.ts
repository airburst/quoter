import { ReactNode } from "react";

type Suggestion = {
  title: string;
  description: string;
};

type Prompt = {
  component: ReactNode;
};

export type MessageContents = {
  message: string;
  suggestion?: Suggestion;
  prompts?: Prompt[];
};

export type Message = {
  id: string;
  type: "server" | "client";
  contents: MessageContents;
  time: string;
};
