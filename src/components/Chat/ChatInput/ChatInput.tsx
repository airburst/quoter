import { ChangeEvent, KeyboardEvent, useState } from "react";
import { PaperPlaneIcon } from "@components/Icon";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Input } from "@twilio-paste/input";
import { Text } from "@twilio-paste/text";
import { Message } from "../types";
import { getMessage } from "../getMessage";

type ChatInputProps = {
  onSubmit: (message: Message) => void;
  onClick: () => void;
  isActive: boolean;
};

const MINIMUM_INPUT_LENGTH = 1;

export const ChatInput = ({ onSubmit, onClick, isActive }: ChatInputProps) => {
  const [input, setInput] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event?.target.value);
  };

  const handleSend = () => {
    if (input.length > MINIMUM_INPUT_LENGTH) {
      const newMessage = getMessage(
        {
          message: input,
        },
        "client",
      );

      onSubmit(newMessage);
      setInput("");
    }
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  const handleClick = () => {
    onClick();
  };

  return (
    <Box
      paddingY="space50"
      paddingX={isActive ? "space50" : "space0"}
      borderTopColor="colorBorder"
      borderTopStyle="solid"
      borderTopWidth={isActive ? "borderWidth10" : "borderWidth0"}
      width="100%"
    >
      <Input
        name="chat"
        type="text"
        placeholder="Type your reply"
        autoComplete="off"
        insertAfter={
          <Button variant="reset" onClick={handleSend}>
            <Text
              color="colorTextPrimary"
              as="span"
              fontWeight="fontWeightSemibold"
            >
              <PaperPlaneIcon style={{ width: "21px" }} />
            </Text>
          </Button>
        }
        value={input}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        onClick={handleClick}
      />
    </Box>
  );
};
