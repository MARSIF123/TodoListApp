import React from "react";
import styles from "./home.module.css";
import PageLayout from "../PageLayout";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const joinNowHandler = () => {
    navigate("/login");
  };
  return (
    <PageLayout>
      <div className={styles.main}>
        <Title>Empower Your Productivity</Title>
        <Subtitle>
          Make every day count with our task management solution.
        </Subtitle>
        <Button onClick={joinNowHandler}>Join Now</Button>
      </div>
    </PageLayout>
  );
}

export default Home;
