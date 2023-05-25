import { Heading } from "@twilio-paste/heading";
import { Feature } from "../Feature";
import { InsurerLogos } from "../InsurerLogos";
import { Section } from "@components/Section";
import { FileLinesIcon, HeadsetIcon } from "@components/Icon";
import styles from "./SellingPoints.module.css";

export const SellingPoints = () => {
  return (
    <Section color="light">
      <div className={styles.container}>
        <Heading variant="heading20" as="h2">
          Simply business is different.
        </Heading>
        <Feature
          icon={<HeadsetIcon />}
          title="Access top rated insurance carriers"
          description="Tailored small business insurance quotes from our curated panel of a-rated carriers."
        >
          <InsurerLogos />
        </Feature>

        <Feature
          icon={<FileLinesIcon />}
          title="Putting you in control"
          description="Transparent quotes allow you to compare prices, coverage and buy online."
        />
        <Feature
          icon={<FileLinesIcon />}
          title="Expert agent support"
          description="Support every step of the way with our brilliant licensed insurance agents."
        />
        <Feature
          icon={<FileLinesIcon />}
          title="Instant access to your COIs"
          description="Immediately access your certificate of insurance and documents via your online account."
        />
      </div>
    </Section>
  );
};
