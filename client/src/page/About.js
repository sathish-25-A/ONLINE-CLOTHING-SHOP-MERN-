import React from "react";

const About = () => {
  return (
    <div>
      <div className="p-3 md:p-4">
      <div className="w-full max-w-full bg-white m-auto flex  flex-col p-4">
      <div
        className="flex flex-col w-full items-center mt-10 md:mt-14 "
        id="about"
      >
        <p className="text-4xl font-bold">About Us</p>
        <p className="text-red-500 text-xl w-full md:w-8/12 text-center my-4">
          The design team also engages in researching new materials and creating
          new lines for different targets for women, offering them not only
          practical and modern styles but also maximum comfort.
          <br />
          VIBE production process from the raw materials to the finished
          garment. We proudly guarantee excellent finish -another crucial factor
          for our growth & development.
          <br />
          The range comprises a comprehensive collection for women including
          Innovative Denim, Fashion Tops, Dresses & Knitwear with emphasis on
          sophisticated textures and silhouettes.
        </p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default About;
