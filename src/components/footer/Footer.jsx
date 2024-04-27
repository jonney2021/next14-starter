import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>jonneydev</div>
      <div className={styles.text}>
        Jonney creative thouthts agency © All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
