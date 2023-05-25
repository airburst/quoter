"use client";

import { Flex } from "@twilio-paste/flex";
import { Button } from "@twilio-paste/button";
import { MinusIcon, PlusIcon } from "@components/Icon";
import { useState } from "react";
import { Input } from "@twilio-paste/input";
import { Box } from "@twilio-paste/box";
import styles from "./NumberInput.module.css";

type NumberInputProps = {
  id: string;
};

export const NumberInput = (props: NumberInputProps) => {
  const { id } = props;
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(+e.target.value);
  };

  return (
    <Box className={styles.container}>
      <Flex vAlignContent="center">
        <Button variant="secondary" size="icon_small" onClick={decrement}>
          <MinusIcon style={{ width: "14px" }} />
        </Button>
        <Input
          id={id}
          name={id}
          type="number"
          value={count.toString()}
          onChange={update}
        />
        <Button variant="secondary" size="icon_small" onClick={increment}>
          <PlusIcon style={{ width: "14px" }} />
        </Button>
      </Flex>
    </Box>
  );
};
