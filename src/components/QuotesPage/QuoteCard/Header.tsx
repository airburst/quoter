import { Flex } from "@twilio-paste/core/flex";
import { Text } from "@twilio-paste/core/text";
import { Brand } from "../InsurerLogos/Brand";
import brand1 from "../InsurerLogos/images/brand1.png";
import styles from "./Header.module.css";
import { Stack } from "@twilio-paste/core";

export const Header = () => {
  return (
    <Flex padding="space50">
      <Flex grow>
        <Brand key={brand1.src} imageData={brand1} desiredHeight={42} />

        <Flex grow>
          <Stack spacing="space40" orientation="vertical">
            <Flex>
              <Text fontSize="fontSize80" as="h2">
                $48.91
              </Text>
              <Text className={styles.cadence} as="span">
                /mo
              </Text>
            </Flex>

            <Flex>
              <Text className={styles.totalLabel} as="span">
                Total
              </Text>
              <Text className={styles.totalAmount} as="span">
                $587.92
              </Text>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
};
