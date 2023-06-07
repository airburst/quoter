type Suggestion = {
  title: string;
  description: string;
};

type Prompt = {
  message: string;
  handleClick: () => void;
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
