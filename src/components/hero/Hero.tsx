import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const terminal = localFont({ src: "../../app/fonts/terminal-grotesque.ttf" });

export default function hero() {
  return (
    <div>
      <section
        id="home"
        className="home text-white relative text-center h-screen overflow-hidden"
      >
        <Image
          src="/assets/Retro_Futuristic_Moebius.png"
          alt="background"
          className="opacity-30"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div>
            <h1 className={`${terminal.className} text-5xl uppercase`}>
              presenting
            </h1>
          </div>
          <div>
            <h1 className="text-5xl">
              <span className="text-blue-700">{"{ "}</span>
              <span className="text-[#FFDA1F] font-bold">RocketHacks</span>
              <span className="text-blue-700">{" }"}</span>
            </h1>
          </div>
          <div>
            <h1 className={`${terminal.className} text-5xl uppercase mt-2`}>
              The biggest Hackathon <br /> in the midwest
            </h1>
          </div>
          <div>
            <h2
              className={`${terminal.className} text-5xl mt-2 text-[#FFDA1F]`}
            >
              March 15-16<sup>th</sup>, 2025
            </h2>
          </div>
          <div>
            <a
              href={`https://form.jotform.com/250544617215049`}
              target="_blank"
            >
              <button className="bg-blue-600 py-3 px-5 rounded-md mt-6 focus:ring-2 focus:ring-blue-400 focus:outline-none hover:bg-[#FFDA20] hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_#FFDA20]">
                <div className="flex flex-row">
                  <div></div>
                  <div>APPLY NOW</div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
