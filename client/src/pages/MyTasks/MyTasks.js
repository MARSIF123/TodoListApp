import React from "react";
import Tasks from "../../components/Tasks/Tasks";

function MyTasks() {
  return (
    <>
      <div
        style={{
          paddingTop: 8,
          marginLeft: 250,
          position: "relative",
          height: "100vh",
          backgroundColor: "var(--primary-color)",
        }}
      >
        <Tasks />
      </div>
    </>
  );
}

export default MyTasks;
