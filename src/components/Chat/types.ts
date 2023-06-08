type Suggestion = {
  title: string;
  description: string;
  message: string;
};

export type MessageContents = {
  message: string;
  suggestion?: Suggestion;
};

export type Message = {
  id: string;
  type: "server" | "client";
  contents: MessageContents;
  time: string;
};
