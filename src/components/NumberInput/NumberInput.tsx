"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Button } from "@twilio-paste/core/button";
import { MinusIcon, PlusIcon } from "@components/Icon";
import { useState } from "react";
import { Input } from "@twilio-paste/core/input";
import { Box } from "@twilio-paste/core/box";
import styles from "./NumberInput.module.css";

type NumberInputProps = {
  id: string;
};

export const NumberInput = (props: NumberInputProps) => {
  const { id } = props;
  const [count, setCount] = useState(1);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <Box className={styles.container}>
      <Flex vAlignContent="center">
        <Button variant="secondary" size="icon_small" onClick={decrement}>
          <MinusIcon style={{ width: "14px" }} />
        </Button>
        <Input id={id} name={id} type="text" defaultValue={count} />
        <Button variant="secondary" size="icon_small" onClick={increment}>
          <PlusIcon style={{ width: "14px" }} />
        </Button>
      </Flex>
    </Box>
  );
};
