import React from "react";

const About = () => {
  return (
    <div className="w-full bg-neutral-900">
      <header className="text-white  text-[10rem] leading-34 tracking-tight font-bold   ">
        {" "}
        <h1> Why To</h1> Choose us ?
      </header>
      <main className="flex item-center justify-center">
        <sup className="absolute text-6xl italic text-zinc-300 left-80 top-[44%] -translate-y-1/2 -translate-x-1/2">
          01.
        </sup>{" "}
        <h1 className=" relative text-[8rem] w-1/2 leading-36  text-zinc-300 tracking-tighter uppercase font-medium">
          {" "}
          We design Unique <span className="underline font-bold ">Web</span>/
          <span className="underline font-bold">Graphic</span> Experince
        </h1>
      </main>
    </div>
  );
};

export default About;
