import React from "react";
import styles from "./home.module.css";
import PageLayout from "../PageLayout";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";

function Home() {
  return (
    <PageLayout>
      <div className={styles.main}>
        <Title>Empower Your Productivity</Title>
        <Subtitle>
          Make every day count with our task management solution.
        </Subtitle>
      </div>
    </PageLayout>
  );
}

export default Home;
