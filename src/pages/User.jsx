import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function User() {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className="main">
      <h1>User: {params.id}</h1>
      <Button
        onClick={() => {
          navigate("/about");
        }}
        variant="primary"
      >
        Navigate
      </Button>
    </div>
  );
}

export default User;
