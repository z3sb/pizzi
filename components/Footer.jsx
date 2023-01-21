import Image from "next/image";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Build By{" "}
        <a className={styles.link} href="https://haiderfadel.tk">
          Haider Fadel
        </a>
      </p>
    </div>
  );
}

export default Footer;
