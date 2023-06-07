type Suggestion = {
  title: string;
  description: string;
};

export type MessageContents = {
  message: string;
  suggestion?: Suggestion;
  prompts?: boolean;
};

export type Message = {
  id: string;
  type: "server" | "client";
  contents: MessageContents;
  time: string;
};
