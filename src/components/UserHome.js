import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Navbar from "./Navbar";
import SpotSearchForm from "./SpotSearchForm";
import SpotsList from "./SpotsList";

function UserHome(props) {
  return (
    <div>
      <Navbar />
      <SpotSearchForm />
      <SpotsList />
    </div>
  );
}

export default UserHome;
