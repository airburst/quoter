import { Stack } from "@twilio-paste/stack";
import { Flex } from "@twilio-paste/flex";
import { useGoNext } from "@hooks/useGoNext";
import { Button } from "@twilio-paste/button";

type PromptsProps = {
  onClick: () => void;
};

export const Prompts = ({ onClick }: PromptsProps) => {
  const goNext = useGoNext("/location");

  return (
    <Stack spacing="space40" orientation="vertical">
      <Flex hAlignContent="right">
        <Button variant="primary" onClick={goNext}>
          Yes, let's continue
        </Button>
      </Flex>
      <Flex hAlignContent="right">
        <Button variant="primary" onClick={onClick}>
          No, it's not quite right
        </Button>
      </Flex>
    </Stack>
  );
};
