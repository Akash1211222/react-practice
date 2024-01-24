import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();

  return (
    <div className=" bg-slate-800 p-4 text-yellow-100 bg-center text-center text-3xl">
      User:{userid}
    </div>
  );
};

export default User;
