import { Button } from "@twilio-paste/core/button";
import { ArrowRightIcon } from "@components/Icon";
import { Box } from "@twilio-paste/core/box";

export const NextButton = () => {
  return (
    <Box marginBottom="space100">
      <Button variant="primary" fullWidth>
        Next
        <ArrowRightIcon style={{ width: "12px" }} />
      </Button>
    </Box>
  );
};
