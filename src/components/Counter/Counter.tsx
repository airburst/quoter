"use client";

import { Button, Text, Flex } from "@simplybusiness/mobius";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { decrement, increment } from "./counterSlice";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Flex justifyContent="center" alignItems="center">
      <Button
        aria-label="Increment value"
        onClick={() => dispatch(decrement())}
      >
        -
      </Button>
      <Text
        variant="h3"
        style={{ width: "var(--size-80)", textAlign: "center" }}
      >
        {count}
      </Text>
      <Button
        aria-label="Decrement value"
        onClick={() => dispatch(increment())}
      >
        +
      </Button>
    </Flex>
  );
};
