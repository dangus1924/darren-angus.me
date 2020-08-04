import React from "react";
import "./App.scss";
import Home from "./component/home/HomePage";
import Index from "./component/resume";
import PDFJSBackend from "./component/resume/pdfjs";
import NavBar from "./component/nav/nav";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="content">
        <Home />
      </div>
      {/* <Index backend={PDFJSBackend} src="/resume.pdf" /> */}
    </div>
  );
}

export default App;
