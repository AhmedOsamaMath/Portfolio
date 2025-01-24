import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Scientist",
          "Machine Learning - AI Enthusiast",
          "Turning Complex Data into Actionable Business Insights",
          "Expert in Python, SQL, Alteryx, Tableau and Power BI",
          "Storyteller with Data",
          "Mathlete Supreme",
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
