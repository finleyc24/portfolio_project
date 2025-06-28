import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image
          src="/images/Headshot.png"
          width={130}
          height={130}
          objectFit="contain"
          alt="Cole Finley Headshot"
        />
        <h1>Cole Finley</h1>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navLink} href="./">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/projectsPage">
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/contactPage">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
