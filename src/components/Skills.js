// src/components/Skills.js

import React from "react";
import { TerminalIcon, CodeIcon } from "@heroicons/react/solid";
import { skills } from "../data"; // Import skills from data.js

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto text-center">
        <CodeIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Skills &amp; Technologies
        </h1>
        <div className="flex flex-wrap -m-4">
          {skills.map((skill) => (
            <div className="p-4 md:w-1/3" key={skill.name}>
              <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-40 p-8 flex-col">
                <TerminalIcon className="w-12 h-12 text-indigo-500 mb-4" />
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                    {skill.name}
                  </h2>
                  <p className="leading-relaxed mb-3">{skill.description}</p>
                  <p className="leading-relaxed mb-3">
                    <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
