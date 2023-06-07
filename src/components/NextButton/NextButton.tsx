import { Button } from "@twilio-paste/button";
import { ArrowRightIcon } from "@components/Icon";
import { Box } from "@twilio-paste/box";
import { useGoNext } from "@hooks/useGoNext";

type NextButtonProps = {
  href: string;
};

export const NextButton = ({ href }: NextButtonProps) => {
  const goNext = useGoNext(href);

  return (
    <Box marginBottom="space100">
      <Button variant="primary" fullWidth onClick={goNext}>
        Next
        <ArrowRightIcon style={{ width: "12px" }} />
      </Button>
    </Box>
  );
};
