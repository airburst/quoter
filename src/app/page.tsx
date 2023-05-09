"use client";

import { Counter } from "@components/Counter";
import { Providers } from "@components/Providers";
import { Text } from "@simplybusiness/mobius";

export default function Home() {
  return (
    <Providers>
      <Text elementType="h1" style={{ textAlign: "center" }}>
        Example component
      </Text>
      <Counter />
    </Providers>
  );
}
