import styles from "./Donut.module.css";

export const Donut = ({ value }: { value: string }) => {
  return (
    <span
      className={styles.container}
      style={{
        background: `conic-gradient(var(--color-secondary) ${value}%, var(--color-neutral-300) 0);`,
      }}
    />
  );
};
