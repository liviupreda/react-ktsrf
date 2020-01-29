import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Navbar from "./Navbar";
import SpotSearchForm from "./SpotSearchForm";

function UserHome(props) {
  return (
    <div>
      <Navbar />
      <SpotSearchForm />
    </div>
  );
}

export default UserHome;
