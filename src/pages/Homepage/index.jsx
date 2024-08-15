import React from "react";
import { useSelector } from "react-redux";

const Homepage = () => {
  const userData = useSelector((store) => store.app.userData);
  console.log("userData in homepage", userData);
  return (
    <h1>
      This is Homepage page for {userData.firstName} {userData.lastName}{" "}
    </h1>
  );
};

export default Homepage;
