import React from "react";
import styles from "./home.module.css";
import PageLayout from "../PageLayout";

function Home() {
  return (
    <PageLayout>
      <div className={styles.main}>Hello World</div>
    </PageLayout>
  );
}

export default Home;
