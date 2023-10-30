// Redirects to this page if invalid url access
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Invalid Page</h1>
      <button
        onClick={() => navigate("/")}
        style={{
          border: "2px solid green",
          borderRadius: "5px",
          padding: "10px 20px",
        }}
      >
        Go to Main Page
      </button>
    </>
  );
}
