import React from "react";

const NotFound = () => {
  return (
    <div style={{
      textAlign: "center",
      marginTop: "100px",
      color: "#ff4c4c",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "100px" }}>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a href="/" style={{
        textDecoration: "none",
        color: "#fff",
        backgroundColor: "#007bff",
        padding: "10px 20px",
        borderRadius: "5px"
      }}>Go Back Home</a>
    </div>
  );
};

export default NotFound;