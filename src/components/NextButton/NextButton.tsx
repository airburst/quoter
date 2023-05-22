import { Button } from "@twilio-paste/core/button";
import { ArrowRightIcon } from "@components/Icon";
import { Box } from "@twilio-paste/core/box";

type NextButtonProps = {
  href: string;
};

export const NextButton = ({ href }: NextButtonProps) => {
  return (
    <Box marginBottom="space100">
      {/* TODO: as={Link} >> import Link from "next/link"; */}
      <Button variant="primary" as="a" fullWidth href={href}>
        Next
        <ArrowRightIcon style={{ width: "12px" }} />
      </Button>
    </Box>
  );
};
