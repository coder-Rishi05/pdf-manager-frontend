import React from "react";

const About = () => {
  return (
    <div className="w-full bg-[#0f0f0f] text-zinc-100">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-32 border-b border-zinc-800">
        <h1 className="text-6xl md:text-7xl font-light tracking-tight">
          Why choose <span className="text-[#c6a75e]">us</span>
        </h1>
        <div className="mt-6 w-24 h-[1px] bg-[#c6a75e]" />
      </section>

      {/* SECTION 01 */}
      <section className="max-w-6xl mx-auto px-6 py-28 border-b border-zinc-800">
        <div className="text-[#c6a75e] text-sm tracking-widest mb-6">01</div>

        <h2 className="text-4xl md:text-5xl font-light leading-tight">
          Organize everything
          <br />
          in one elegant place.
        </h2>

        <p className="mt-6 text-zinc-400 max-w-xl text-lg">
          A clean system designed for clarity, structure and effortless control.
        </p>
      </section>

      {/* SECTION 02 */}
      <section className="max-w-6xl mx-auto px-6 py-28 border-b border-zinc-800">
        <div className="text-[#c6a75e] text-sm tracking-widest mb-6">02</div>

        <h2 className="text-4xl md:text-5xl font-light leading-tight">
          Access notes and
          <br />
          curated resources instantly.
        </h2>

        <p className="mt-6 text-zinc-400 max-w-xl text-lg">
          Everything you need, thoughtfully organized and always within reach.
        </p>
      </section>

      {/* SECTION 03 */}
      <section className="max-w-6xl mx-auto px-6 py-28 border-b border-zinc-800">
        <div className="text-[#c6a75e] text-sm tracking-widest mb-6">03</div>

        <h2 className="text-4xl md:text-5xl font-light leading-tight">
          Work from anywhere
          <br />
          without friction.
        </h2>

        <p className="mt-6 text-zinc-400 max-w-xl text-lg">
          Seamless access across devices with a refined experience.
        </p>
      </section>

      {/* ABOUT TEAM */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-5xl font-light mb-16">
          About <span className="text-[#c6a75e]">us</span>
        </h2>

        <div className="space-y-12">
          <div className="flex justify-between items-center border-t border-zinc-800 pt-8 group transition-all duration-500">
            <div className="text-zinc-500 text-sm tracking-widest">01</div>
            <div className="text-2xl font-light group-hover:text-[#c6a75e] transition-all duration-500">
              Rishi
            </div>
            <div className="text-zinc-400 text-lg font-light">Architect</div>
          </div>

          <div className="flex justify-between items-center border-t border-zinc-800 pt-8 group transition-all duration-500">
            <div className="text-zinc-500 text-sm tracking-widest">02</div>
            <div className="text-2xl font-light group-hover:text-[#c6a75e] transition-all duration-500">
              Rishi
            </div>
            <div className="text-zinc-400 text-lg font-light">Writer</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
