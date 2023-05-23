"use client";

import { RefObject, ChangeEvent, MouseEvent } from "react";
import { AriaLabelingProps, DOMProps } from "@react-types/shared";
// import clsx from "clsx";
// import { useFocusRing } from "@react-aria/focus";
// import { useHover } from "@react-aria/interactions";
import { Text } from "@twilio-paste/core/text";
import { Input } from "@twilio-paste/core/input";
import { Button } from "@twilio-paste/core/button";
import { Flex } from "@twilio-paste/core/flex";
import { Highlight } from "@components/Highlight";
import { Box } from "@twilio-paste/core/box";
import { CameraIcon } from "@components/Icon";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";

export type TradeInputProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement>;
  inputProps?: AriaLabelingProps & DOMProps;
  value: string;
  className?: string;
  label?: string;
  placeholder: string;
  initialTrade?: string;
  onEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  isEditable: boolean;
};

export const TradeInput = (props: TradeInputProps) => {
  const {
    onChange,
    onEdit,
    inputRef,
    inputProps,
    value,
    // className,
    label,
    placeholder,
    initialTrade,
    isEditable,
    // ...otherProps
  } = props;
  const selectedTrade = initialTrade && !isEditable;
  // const { isFocusVisible, focusProps } = useFocusRing({
  //   within: true,
  // });
  // const { hoverProps, isHovered } = useHover({
  //   ...otherProps,
  // });
  // const classes = clsx(
  //   "chopin",
  //   "chopin/TradeSelectorInput",
  //   {
  //     "--is-focused": isFocusVisible,
  //     "--is-hovered": isHovered,
  //   },
  //   className,
  // );

  return (
    <div /* {...focusProps} */>
      {selectedTrade ? (
        <Highlight>
          <Flex>
            <Flex grow paddingRight="space150" vAlignContent="top">
              <Text as="p" fontSize="fontSize40">
                You have selected ‘<strong>{initialTrade}</strong>’ as your
                trade/profession.
              </Text>
            </Flex>
            <Flex>
              <Button
                variant="link"
                // type="button"
                className="mobius/Link chopin/TradeSelectorButton"
                aria-label="Change your selected profession"
                onClick={onEdit}
              >
                Edit
              </Button>
            </Flex>
          </Flex>
          <Flex vertical>
            <Box
              borderTopStyle="solid"
              borderTopWidth="borderWidth20"
              borderTopColor="colorBorderInverseStrongest"
              marginTop="space50"
              paddingTop="space50"
            >
              <Box
                marginBottom="space30"
                color="colorTextBrandHighlight"
                width="30px"
              >
                <CameraIcon />
              </Box>
              <Text as="p" fontSize="fontSize40">
                We define ‘
                <strong>{/*initialTrade*/}Weeding Photography</strong>’ as the
                art of practice of taking, editing, and processing photographs.
              </Text>
            </Box>
          </Flex>
        </Highlight>
      ) : (
        <Flex vAlignContent="center">
          <Flex grow paddingRight={isEditable ? "space50" : undefined}>
            <Input
              // {...hoverProps}
              {...inputProps}
              type="text"
              placeholder={placeholder}
              aria-label={label}
              // className={classes}
              onChange={onChange}
              ref={inputRef}
              value={value}
              insertBefore={
                <Text
                  color="colorTextWeak"
                  as="span"
                  fontWeight="fontWeightSemibold"
                >
                  <SearchIcon decorative />
                </Text>
              }
            />
          </Flex>
          <Flex>
            {isEditable && (
              <Button
                variant="link"
                // type="button"
                className="mobius/Link chopin/TradeSelectorButton"
                aria-label="Cancel changes"
                onClick={onEdit}
              >
                Cancel
              </Button>
            )}
          </Flex>
        </Flex>
      )}
    </div>
  );
};
