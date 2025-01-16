import React from "react";


const OurValues = () => {
  return (
    <div className="w-full max-w-4xl mx-auto pb-32 flex flex-col justify-center items-center max-md:p-4">
      <h1 className="text-7xl text-center font-normal text-blue_2 max-md:text-6xl mb-14 max-md:mb-5 ">
        Our <span className="font-black text-purple_4">Values</span>
      </h1>
      <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:justify-center max-md:items-center relative gap-10">
        <div className="bg-white_2 rounded-3xl top-10 text-lg text-center p-10 border-purple_4 border-4 m-auto leading-tight max-md:mb-6">
          <p className="font-light">
            Symbolizing togetherness and a sense of family within EXERCISE 2025.
            Every member works in harmony, creating an inclusive and supportive
            environment, in line with the spirit of "Together We Rise."
          </p>
          <div className="flex justify-center items-center">
            <div className="absolute top-[-16px] bg-purple_4 text-white font-InterExer font-black text-2xl py-2 px-6 rounded-md">
              UNITE
            </div>
          </div>
        </div>

        <div className="relative bg-white_2 rounded-3xl top-0 text-lg text-center p-10 border-purple_5 border-4 m-auto leading-tight max-md:mb-6">
          <p className="font-light">
            Focusing on empowering members to grow, learn, and confidently face
            challenges. This core value emphasizes EXERCISE's commitment to
            equipping members with meaningful skills and experiences.
          </p>
          <div className="flex justify-center items-center">
            <div className="absolute top-[-20px] bg-purple_5 text-white font-bold text-2xl py-2 px-6 rounded-md">
              EMPOWER
            </div>
          </div>
        </div>

        <div className="relative bg-white_2 rounded-3xl max-md:top-0 text-lg text-center p-10 border-purple_4 border-4 m-auto leading-tight">
          <p className="font-light">
            Reflecting the spirit of continuous growth through fresh ideas,
            creative solutions, and new approaches that take EXERCISE beyond
            boundaries, in line with the tagline "Beyond Limits."
          </p>
          <div className="flex justify-center items-center">
            <div className="absolute top-[-20px] bg-purple_4 text-white font-bold text-2xl py-2 px-6 rounded-md">
              INNOVATE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
