"use client";

import { Flex } from "@twilio-paste/flex";
import { Button } from "@twilio-paste/button";
import { MinusIcon, PlusIcon } from "@components/Icon";
import { useState, ChangeEvent } from "react";
import { Input } from "@twilio-paste/input";
import { Box } from "@twilio-paste/box";
import { CircularIcon } from "@components/CircularIcon";
import styles from "./NumberInput.module.css";

type NumberInputProps = {
  id: string;
};

export const NumberInput = (props: NumberInputProps) => {
  const { id } = props;
  const INITIAL_COUNT = 1;
  const [count, setCount] = useState(INITIAL_COUNT);

  const decrement = () => {
    const SINGLE_ITEM = 1;

    if (count > SINGLE_ITEM) {
      setCount(count - SINGLE_ITEM);
    }
  };

  const increment = () => {
    const SINGLE_ITEM = 1;

    setCount(count + SINGLE_ITEM);
  };

  const update = (e: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };

  return (
    <Box className={styles.container}>
      <Flex vAlignContent="center">
        <Button variant="primary_icon" onClick={decrement}>
          <CircularIcon
            backgroundColor="colorBackgroundBrand"
            size="14px"
            icon={<MinusIcon />}
          />
        </Button>
        <Input
          id={id}
          name={id}
          type="number"
          value={count.toString()}
          onChange={update}
        />
        <Button variant="primary_icon" onClick={increment}>
          <CircularIcon
            backgroundColor="colorBackgroundBrand"
            size="14px"
            icon={<PlusIcon />}
          />
        </Button>
      </Flex>
    </Box>
  );
};
