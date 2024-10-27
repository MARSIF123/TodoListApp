import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tasks from "../../components/Tasks/Tasks";

function MyTasks() {
  return (
    <>
      <Sidebar />
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
