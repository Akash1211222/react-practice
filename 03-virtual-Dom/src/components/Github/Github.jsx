import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  console.log(data);

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Akash1211222")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <>
      <div className=" text-center m-5 p-4 bg-slate-600 text-white text-4xl">
        Your Name: {data.name}
        <img src={data.avatar_url} alt="git" width={300} />
      </div>
      <div className=" text-center m-5 p-4 bg-slate-600 text-white text-4xl">
        Github followers: {data.followers}
      </div>
      <div className=" text-center m-5 p-4 bg-slate-600 text-white text-4xl">
        Github Following: {data.following}
      </div>
    </>
  );
};

export default Github;

export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/Akash1211222");
  return response.json();
};
