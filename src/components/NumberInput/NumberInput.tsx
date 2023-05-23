"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Button } from "@twilio-paste/core/button";
import { MinusIcon, PlusIcon } from "@components/Icon";
import { useState } from "react";
import { Input } from "@twilio-paste/core/input";

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
    <Flex vAlignContent="center">
      <Button variant="primary_icon" size="icon" onClick={decrement}>
        <MinusIcon style={{ width: "30px" }} />
      </Button>
      <Input id={id} name={id} type="text" defaultValue={count} />
      <Button variant="primary_icon" size="icon" onClick={increment}>
        <PlusIcon style={{ width: "30px" }} />
      </Button>
    </Flex>
  );
};
