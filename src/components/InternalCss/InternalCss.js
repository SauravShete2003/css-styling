import React from "react";

function InternalCss() {
  const internalCss = {
    textAlign: "center",
    backgroundColor: "gray",
    width: "350px"
  };

  const imageStyling = {
    width: "100%",
    height: "350px",
    borderRadius: "5px",
  };

  return (
    <div style={internalCss}>
      <h1>Hanuman Ji</h1>
      <img
        src="https://i.pinimg.com/736x/cb/21/2f/cb212f92878b0a5d511ed98f9ddbf1a8.jpg"
        style={imageStyling}
      />
    </div>
  );
}

export default InternalCss;
