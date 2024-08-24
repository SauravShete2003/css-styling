import React from "react";

function InlineCss() {
  return (
    <div style={{ width: "350px"  , margin : '1px 5px'}}>
      <h1
        style={{
          backgroundColor: "skyblue",
          padding: "20px 0",
          textAlign: "center",
          margin: "0",
        }}
      >
        Mahadev Ji
      </h1>
      <img
        src="https://cdn.pixabay.com/photo/2023/12/27/18/44/shiva-8472684_960_720.png"
        style={{ width: "100%", height: "350px" }}
      />
    </div>
  );
}

export default InlineCss;
