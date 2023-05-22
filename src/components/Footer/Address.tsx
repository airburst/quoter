"use client";

import { Text } from "@twilio-paste/core/Text";

export const Address = () => {
  return (
    <div>
      <Text as="p">
        <strong>Address</strong>
      </Text>
      <Text as="p">
        Simply Business
        <br />1 Beacon Street
        <br />
        15th Floor
        <br />
        Boston, MA
        <br />
        02108
        <br />
        (844) 654-7272
      </Text>
    </div>
  );
};
