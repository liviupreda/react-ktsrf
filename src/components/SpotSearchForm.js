import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

function SpotSearchForm(props) {
  const url = "https://5e3064ed576f9d0014d63faf.mockapi.io";
  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    axios.get(url + "/spot").then(response => console.log(response.data));
  };

  return (
    <div className="SpotSearchForm">
      <p>Locations</p>
      <div>
        <input type="text" onChange={handleChange} />
        <Button type="submit" onClick={handleSubmit}>
          Search
        </Button>
      </div>
    </div>
  );
}

export default SpotSearchForm;
