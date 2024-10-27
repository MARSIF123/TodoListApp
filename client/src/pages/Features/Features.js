import React from "react";
import Title from "../../components/Title/Title";
import styles from "./features.module.css";
import PageLayout from "../PageLayout";

function Features() {
  return (
    <PageLayout>
      <div className={styles.main}>
        <Title>Your Ultimate Productivity Companion </Title>
        <ul className={styles.list}>
          <li>Quick and easy task creation.</li>
          <li>Organize tasks into to different groups for clarity of mind.</li>
          <li>Set Priority levels to focus on important tasks.</li>
          <li>Set reminders to stay on the top of your tasks list.</li>
        </ul>
      </div>
    </PageLayout>
  );
}

export default Features;
