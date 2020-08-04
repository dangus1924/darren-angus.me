import React from "react";

import "./HomePage.scss";

const Home = () => {
  return (
    <div className="main">
      <div className="sub">
        <h1>Hey, I'm Darren,</h1>
        <p>
          A Full-stack developer worked with both <strong>front-end</strong> and{" "}
          <strong>back-end</strong>.
        </p>
      </div>
      <div>
        <button>Portfolio</button>
        <br />
        <button> My Experience</button>
      </div>
    </div>
  );
};

export default Home;
