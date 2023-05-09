import styles from "./Footer.module.css";

export const Trustpilot = () => {
  return <p>Trustpilot</p>;
};

export const Address = () => {
  return <p>Address</p>;
};

export const Legal = () => {
  return <p>Legal</p>;
};

export const Footer = () => (
  <footer className={styles.footer}>
    <Trustpilot />
    <Address />
    <Legal />
  </footer>
);
