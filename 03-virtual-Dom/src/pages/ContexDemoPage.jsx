import React from "react";
import UserContextProvider from "../Context/UserContextProvider";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";

const ContexDemoPage = () => {
  return (
    <UserContextProvider>
      <h1>Login details bro</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default ContexDemoPage;
