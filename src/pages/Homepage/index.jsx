import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Homepage = () => {
  const userData = useSelector((store) => store.app.userData);
  console.log("userData in homepage", userData);
  return (
    <>
      <Header />
      <h1>
        This is Homepage page for {userData.firstName} {userData.lastName}{" "}
      </h1>
      <Footer />
    </>
  );
};

export default Homepage;
