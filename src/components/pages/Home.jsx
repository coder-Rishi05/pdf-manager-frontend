import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* <h1>Welcome Home</h1>
      <Link to={"/create-post"} >Create post</Link>
      <Link to={"/feed"} >Get Post</Link> */}
      <div className="w-full h-[200vh] bg-neutral-700/20">
        <div className="w-full  flex items-center flex-col justify-center">
          <div className="center flex items-center justify-center">
            <h1 className="text-zinc-900/90 font-[Open] font-bold text-[30vh] leading-44 tracking-tight ">
              PDF MANAGER
            </h1>
          </div>
          <div className="center flex items-center justify-center">
            <h1 className="text-zinc-900/90 font-[Open] font-bold text-[30vh] leading-44 tracking-tight ">
              An Web Made for 
              You cloud Storage
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
