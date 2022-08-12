import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../Components/Navigation";
import Sidebar from "../../Components/Sidebar";
import pic from "../../images/logo.png";


const Dashboard = () => {
  return (
    <>
        <Navigation/>
        <Sidebar/>
    </>
  );
};

export default Dashboard;
