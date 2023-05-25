import styles from "./Donut.module.css";

type DonutProps = {
  value?: string;
};

export const Donut = ({ value = "0" }: DonutProps) => {
  return (
    <span
      className={styles.container}
      style={{
        background: `conic-gradient(var(--color-secondary) ${value}%, var(--color-neutral-300) 0)`,
      }}
    />
  );
};
