import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Passionate About Clean and Scalable Code",
          "Turning Ideas into Functional Applications",
          "Expert in Python, JavaScript, Node.js, and SQL",
          "Builder of Robust Backend and Intuitive Frontend Systems",
          "Tech Enthusiast and Problem Solver",
          "Lifelong Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
