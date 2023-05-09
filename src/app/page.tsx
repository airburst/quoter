"use client";

import { Counter } from "@components/Counter";
import { Metadata } from "@components/Metadata";
import { Providers } from "@components/Providers";
import { Text } from "@simplybusiness/mobius";

export default function Home() {
  return (
    <Providers>
      <Metadata />
      <Text elementType="h1" style={{ textAlign: "center" }}>
        Example component
      </Text>
      <Counter />
    </Providers>
  );
}
