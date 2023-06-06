import { PaperPlaneIcon } from "@components/Icon";
import { Input } from "@twilio-paste/input";
import { Text } from "@twilio-paste/text";

export const ChatInput = () => {
  return (
    <Input
      name="chat"
      type="text"
      placeholder="Type your reply"
      insertAfter={
        <Text
          color="colorTextPrimary"
          as="span"
          fontWeight="fontWeightSemibold"
        >
          <PaperPlaneIcon style={{ width: "21px" }} />
        </Text>
      }
    />
  );
};
