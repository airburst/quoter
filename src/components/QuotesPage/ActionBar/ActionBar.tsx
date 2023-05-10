import { Flex } from "@simplybusiness/mobius";
import { EditLimits } from "./EditLimits";
import { Cadence } from "./Cadence";

export const ActionBar = () => {
  return (
    <Flex justifyContent="space-between">
      <EditLimits />
      <Cadence />
    </Flex>
  );
};
