import React from "react";
import Typewriter from "./Typing.js";
import "./style.css";

const Text = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Typewriter
            text="Challenge Your brain with GeekQuiz!"
            minSpeed={50}
            maxSpeed={150}
          />
        </h1>
        <p>
          <Typewriter
            text="Enjoy your stay and have a great time exploring."
            minSpeed={70}
            maxSpeed={200}
          />
        </p>
      </header>
    </div>
  );
};

export default Text;
