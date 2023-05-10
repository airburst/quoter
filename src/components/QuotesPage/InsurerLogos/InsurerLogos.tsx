import { Brand } from "./Brand";
import styles from "./InsurerLogos.module.css";
import brand1 from "./images/brand1.png";
import brand2 from "./images/brand2.png";
import brand3 from "./images/brand3.png";
import brand4 from "./images/brand4.png";
import brand5 from "./images/brand5.png";
import brand6 from "./images/brand6.png";
import brand7 from "./images/brand7.png";

const DESIRED_HEIGHT = 30;

export const InsurerLogos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Brand
          key={brand1.src}
          imageData={brand1}
          desiredHeight={DESIRED_HEIGHT}
        />
        <Brand
          key={brand2.src}
          imageData={brand2}
          desiredHeight={DESIRED_HEIGHT}
        />
        <Brand
          key={brand3.src}
          imageData={brand3}
          desiredHeight={DESIRED_HEIGHT}
        />
        <Brand
          key={brand4.src}
          imageData={brand4}
          desiredHeight={DESIRED_HEIGHT}
        />
        <Brand
          key={brand5.src}
          imageData={brand5}
          desiredHeight={DESIRED_HEIGHT}
        />
        <Brand
          key={brand6.src}
          imageData={brand6}
          desiredHeight={DESIRED_HEIGHT}
        />
        <Brand
          key={brand7.src}
          imageData={brand7}
          desiredHeight={DESIRED_HEIGHT}
        />
      </div>
    </div>
  );
};
