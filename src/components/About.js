import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hi, I’m Dwarakeshvaran, a passionate Web Developer with expertise in
          building engaging and efficient web applications. I specialize in
          frontend technologies like HTML, CSS, JavaScript, React, Tailwind CSS,
          and Bootstrap, as well as backend development using Node.js,
          Express.js, and MongoDB. With a B.Sc. in Computer Science and hands-on
          experience as an intern at Hilife.ai,
        </p>
        <br />
        <p className="text-xl">
          I’ve honed my skills by working on real-world projects. These include
          developing a UI-friendly website for my-restaurant and creating a
          my-youtube with the live APIs and autogenerated live section. I thrive
          on solving challenging problems and creating user-focused solutions.
          As a fresher, I am eager to apply my skills, contribute to innovative
          projects, and grow alongside a dynamic team.
        </p>
      </div>
    </div>
  );
}

export default About;