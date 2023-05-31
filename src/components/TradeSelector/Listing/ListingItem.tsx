"use client";

import clsx from "clsx";
import { Ref, Key, forwardRef } from "react";
import { TradeProps } from "../types";
import { ListItem } from "@twilio-paste/list";
import { Button } from "@twilio-paste/button";

export type ListingItemElementType = HTMLButtonElement;

export type ListingItemProps = {
  key?: Key;
  trade: TradeProps;
  onClick: (trade: TradeProps) => void;
  selected: boolean;
};

export const ListingItem = forwardRef(
  (props: ListingItemProps, ref: Ref<ListingItemElementType>) => {
    const { trade, onClick } = props;
    const classes = clsx(
      "chopin/TradeSelectorButton",
      "chopin/TradeSelectorOption",
    );

    const handleClick = () => onClick(trade);

    return (
      <ListItem>
        <Button
          variant="link"
          ref={ref}
          type="button"
          onClick={handleClick}
          className={classes}
          data-key={trade.value}
        >
          {/* eslint-disable-next-line react/no-danger */}
          <span dangerouslySetInnerHTML={{ __html: trade.label }} />
        </Button>
      </ListItem>
    );
  },
);

ListingItem.displayName = "ListingItem";
