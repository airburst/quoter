import { Flex } from "@simplybusiness/mobius";
import { EditLimits } from "./EditLimits";
import { Cadence } from "./Cadence";
import { Section } from "@components/Section";

export const ActionBar = () => {
  return (
    <Section>
      <Flex justifyContent="space-between">
        <EditLimits />
        <Cadence />
      </Flex>
    </Section>
  );
};
