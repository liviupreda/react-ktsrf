import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

function SpotSearchForm(props) {
  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <div className="SpotSearchForm">
      <p>Locations</p>
      <div>
        <input type="text" onChange={handleChange} />
        <Button type="submit">Search</Button>
      </div>
    </div>
  );
}

export default SpotSearchForm;
