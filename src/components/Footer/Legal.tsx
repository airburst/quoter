"use client";

import { Text } from "@twilio-paste/core/Text";

export const Legal = () => {
  return (
    <Text
      as="p"
      color="colorTextInverse"
      fontSize="fontSize40"
      lineHeight="lineHeight40"
    >
      &copy; Copyright 2023 Simply Business. All Rights Reserved. Simply
      Business, LLC is a licensed insurance producer in all U.S. States and the
      District of Columbia. Simply Business has its registered office at Simply
      Business, 1 Beacon Street, 15th Floor, Boston, MA, 02108. In the state of
      California, we operate under the name Simply Business Insurance Agency,
      Inc., License #0M20593. In the state of New York we operate under the name
      Simply Business Insurance Agency. In the state of Texas we operate under
      the name, U.S. Simply Business, Inc. For more information, please refer to
      our <a href="#">Privacy Policy</a> and <a href="#">Terms & Conditions</a>.
    </Text>
  );
};
