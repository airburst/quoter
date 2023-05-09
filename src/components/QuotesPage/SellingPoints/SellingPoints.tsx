import { Feature } from "../Feature";
import { InsurerLogos } from "../InsurerLogos";

export const SellingPoints = () => {
  return (
    <>
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
    </>
  );
};
