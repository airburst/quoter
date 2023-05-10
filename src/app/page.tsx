"use client";

import { Providers } from "@components/Providers";
import { Text } from "@simplybusiness/mobius";

export default function Home() {
  return (
    <Providers>
      <Text elementType="h1" style={{ textAlign: "center" }}>
        Example component
      </Text>
    </Providers>
  );
}
