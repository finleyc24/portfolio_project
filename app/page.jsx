import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import styles from "./styles.module.css";

export default function Page() {
  // This is the main page of the application.

  return (
    <>
      <Header />
      <main>
        <h1 className={styles.h1}>Welcome to My Portfolio</h1>
        <p>
          This is a collection of my work, showcasing various projects and
          skills I've developed over the years.
        </p>
      </main>
      <Footer />
    </>
  );
}
