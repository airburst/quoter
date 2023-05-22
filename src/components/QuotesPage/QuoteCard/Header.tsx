import { Flex } from "@twilio-paste/core/flex";
import { Stack } from "@twilio-paste/core";
import { Text } from "@twilio-paste/core/text";
import { Brand } from "../InsurerLogos/Brand";
import brand1 from "../InsurerLogos/images/brand1.png";
import styles from "./Header.module.css";
import { Stack } from "@twilio-paste/core";

export const Header = () => {
  return (
    <Flex paddingY="space50">
      <div className={styles.container}>
        <Brand key={brand1.src} imageData={brand1} desiredHeight={42} />

        <Stack spacing="space40" orientation="vertical">
          <Stack spacing="space20" orientation="horizontal">
            <Text fontSize="fontSize80" as="h2">
              $48.91
            </Text>
            <Text className={styles.cadence} as="span">
              /mo
            </Text>
          </Stack>

          <Stack spacing="space20" orientation="horizontal">
            <Text className={styles.totalLabel} as="span">
              Total
            </Text>
            <Text className={styles.totalAmount} as="span">
              $587.92
            </Text>
          </Stack>
        </Stack>
      </div>
    </Flex>
  );
};
