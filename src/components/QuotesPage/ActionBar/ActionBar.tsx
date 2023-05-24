import { Flex } from "@twilio-paste/flex";
import { EditLimits } from "./EditLimits";
import { Cadence } from "./Cadence";

export const ActionBar = () => {
  return (
    <Flex vAlignContent="center">
      <EditLimits />
      <Cadence />
    </Flex>
  );
};
