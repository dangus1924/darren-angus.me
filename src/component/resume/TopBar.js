import React from "react";
import Work from "./WorkExpr";
import Ed from "./Education";
import Project from "./Project";

const Title = () => {
  return (
    <div>
      <h1>Darren angus</h1>
      <p>Full-Stack Web Developer</p>
      <p>
        Innovative optimized solution seeker, Excited to be at the deployment
        phase of my new career change as a full-stack web developer. I am
        ambitious, adventurous, assiduous, animated and an alliteration
        advocate.
      </p>
      <ul>
        <li>dangus1924@gmail.com</li>
        <li>(732) 527-2834</li>
        <a href="https://www.linkedin.com/in/darren-angus-441b7b188/">
          <li>linkedin.com/in/darren-angus-441b7b188</li>
        </a>
        <a href="https://www.darrenangus.me">
          <li>www.darrenangus.me</li>
        </a>
        <li>facebook.com/dangus1924</li>
        <li>github.com/dangus1924</li>
      </ul>
      <Work />
      <Ed />
      <Project />
    </div>
  );
};


export default Title
