"use client";

import { ReactNode } from "react";
import { Flex } from "@twilio-paste/flex";
import { Text } from "@twilio-paste/text";
import { Separator } from "@twilio-paste/separator";
import { AcceptIcon } from "@twilio-paste/icons/esm/AcceptIcon";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { QuoteActions } from "../QuoteActions";
import { Rating } from "../Rating";
import { Header } from "./Header";
import styles from "./QuoteCard.module.css";

type Props = {
  highlight?: ReactNode;
};

export const QuoteCard = ({ highlight }: Props) => {
  return (
    <div className={styles.container}>
      {highlight}
      <div className={styles.body}>
        <Header />
        <Separator orientation="horizontal" verticalSpacing="space0" />
        <Rating />
        <Separator orientation="horizontal" verticalSpacing="space0" />
        <Flex paddingTop="space50" vertical>
          <Text as="p">INCLUDED WITH THIS POLICY</Text>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <AcceptIcon decorative color="colorTextSuccess" />
              <Flex grow>General Liability</Flex>
              <strong>$2M</strong>
            </li>
            <li className={styles.listItem}>
              <AcceptIcon decorative color="colorTextSuccess" />
              Additional Insureds
            </li>
            <li className={styles.listItem}>
              <AcceptIcon decorative color="colorTextSuccess" />
              No Deductibles
            </li>
          </ul>

          <Text as="p">AVAILABLE TO ADD TO THIS POLICY</Text>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <PlusIcon decorative />
              Business Property and Equipment
            </li>
            <li className={styles.listItem}>
              <PlusIcon decorative />
              And More
            </li>
          </ul>
        </Flex>
        <QuoteActions />
      </div>
    </div>
  );
};
