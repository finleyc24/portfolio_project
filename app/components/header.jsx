import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Cole Finley</h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/aboutPage">About</Link>
          </li>
          <li>
            <Link href="/projectsPage">Projects</Link>
          </li>
          <li>
            <Link href="/contactPage">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
