import React from "react";
import Work from "./WorkExpr";
import Ed from "./Education";
import Project from "./Project";
import Title from "./TopBar";
import "./index.scss";

const Index = () => {
  return (
    <div className="container">
      <Title />
      <Work />
      <Ed />
      <Project />
    </div>
  );
};

export default Index;
