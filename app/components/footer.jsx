import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Cole Finley. All rights reserved.</p>
    </footer>
  );
};
export default Footer;
