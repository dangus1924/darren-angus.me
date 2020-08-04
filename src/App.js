import React from "react";
import "./App.css";
import Home from "./component/home/HomePage";
import Index from "./component/resume";
import PDFJSBackend from "./component/resume/pdfjs";

function App() {
  return (
    <div className="App">
      <Home />
      <Index backend={PDFJSBackend} src="/resume.pdf" />
    </div>
  );
}

export default App;
