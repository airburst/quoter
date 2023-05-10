import { Feature } from "../Feature";
import { InsurerLogos } from "../InsurerLogos";
import { Section } from "@components/Section";
import styles from "./SellingPoints.module.css";

export const SellingPoints = () => {
  return (
    <Section color="light">
      <h2>Simply business is different.</h2>
      <Feature
        icon="./feature-icon.png"
        title="Feature title"
        description="A longer description that spans across few lines"
      >
        <InsurerLogos />
      </Feature>

      <Feature
        icon="./feature-icon.png"
        title="Feature title"
        description="A longer description that spans across few lines"
      />
      <Feature
        icon="./feature-icon.png"
        title="Feature title"
        description="A longer description that spans across few lines"
      />
      <Feature
        icon="./feature-icon.png"
        title="Feature title"
        description="A longer description that spans across few lines"
      />
    </Section>
  );
};
