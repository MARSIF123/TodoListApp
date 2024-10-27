import React from "react";
import styles from "./home.module.css";
import PageLayout from "../PageLayout";
import Title from "../../components/Title/Title";

function Home() {
  return (
    <PageLayout>
      <div className={styles.main}>
        <Title>Empower Your Productivity</Title>
      </div>
    </PageLayout>
  );
}

export default Home;
