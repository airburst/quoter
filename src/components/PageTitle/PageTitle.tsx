import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";

type PageTitleProps = {
  title: string;
};

export const PageTitle = (props: PageTitleProps) => {
  const { title } = props;

  return (
    <Box paddingY="space40">
      <Heading as="h2" variant="heading10">
        {title}
      </Heading>
    </Box>
  );
};
