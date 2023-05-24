import { useRouter } from "next/navigation";
import { Button } from "@twilio-paste/core/button";
import { ArrowRightIcon } from "@components/Icon";
import { Box } from "@twilio-paste/core/box";

type NextButtonProps = {
  href: string;
};

export const NextButton = ({ href }: NextButtonProps) => {
  const router = useRouter();
  const goNext = () => router.push(href);

  return (
    <Box marginBottom="space100">
      <Button variant="primary" fullWidth onClick={goNext}>
        Next
        <ArrowRightIcon style={{ width: "12px" }} />
      </Button>
    </Box>
  );
};
