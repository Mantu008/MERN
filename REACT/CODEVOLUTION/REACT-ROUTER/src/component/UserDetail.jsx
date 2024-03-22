import React from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
  // const { userId } = useParams();
  const params = useParams();
  const userId = params.userId;
  return (
    <div>
      <h1>user detail: {userId}</h1>
    </div>
  );
}

export default UserDetail;
