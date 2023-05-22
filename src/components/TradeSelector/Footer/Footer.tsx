import { Anchor } from "@twilio-paste/core/anchor";
import { Info } from "@components/Info";

export const Footer = () => {
  return (
    <Info>
      You can also choose from the{" "}
      <Anchor href="/components">full list of professions</Anchor>.
    </Info>
  );
};
