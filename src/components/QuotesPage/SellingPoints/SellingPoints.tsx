import { Text } from "@twilio-paste/core/Text";
import { Feature } from "../Feature";
import { InsurerLogos } from "../InsurerLogos";
import { Section } from "@components/Section";
import styles from "./SellingPoints.module.css";

export const SellingPoints = () => {
  return (
    <Section color="light">
      <div className={styles.container}>
        <Text as="h3">Simply business is different.</Text>
        <Feature
          icon="./feature-icon.png"
          title="Access top rated insurance carriers"
          description="Tailored small business insurance quotes from our curated panel of a-rated carriers."
        >
          <InsurerLogos />
        </Feature>

        <Feature
          icon="./feature-icon.png"
          title="Putting you in control"
          description="Transparent quotes allow you to compare prices, coverage and buy online."
        />
        <Feature
          icon="./feature-icon.png"
          title="Expert agent support"
          description="Support every step of the way with our brilliant licensed insurance agents."
        />
        <Feature
          icon="./feature-icon.png"
          title="Instant access to your COIs"
          description="Immediately access your certificate of insurance and documents via your online account."
        />
      </div>
    </Section>
  );
};
