// import { FocusableElement } from "@react-types/shared";
// import { DOMAttributes } from "react";

import { Label } from "@twilio-paste/core/label";
import { Heading } from "@twilio-paste/core/heading";
import { Text } from "@twilio-paste/text";
import type { LabelProps } from "../types";

export type HeaderProps = {
  isOpen: boolean;
  // labelProps:
  //   | DOMAttributes<FocusableElement>
  //   | React.LabelHTMLAttributes<HTMLLabelElement>;
  labels: LabelProps;
};

export const Header = (props: HeaderProps) => {
  const { isOpen, /* labelProps, */ labels } = props;

  if (!isOpen) return null;

  return (
    <>
      <Label
        // {...labelProps}
        className="chopin/TradeSelectorLabel"
        htmlFor="trade_selector"
        aria-hidden
      >
        <Heading as="h2" variant="heading20">
          {labels.input}
        </Heading>
      </Label>
      {labels.description && (
        <Text
          as="p"
          className="chopin/TradeSelectorDescription"
          variant="caption"
        >
          {labels.description}
        </Text>
      )}
    </>
  );
};
