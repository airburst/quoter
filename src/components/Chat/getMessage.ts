import { getCurrentTime } from "@utils/dates";
import { MessageContents } from "./types";
import { randomId } from "@utils/general";

export const getMessage = (
  contents: MessageContents,
  type: "client" | "server",
) => {
  return {
    id: randomId(),
    type,
    contents,
    time: getCurrentTime(),
  };
};
