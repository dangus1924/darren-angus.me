import React from "react";
import "./App.scss";
import Home from "./component/home/HomePage";
import Index from "./component/resume";
import PDFJSBackend from "./component/resume/pdfjs";
import NavBar from "./component/nav/nav";
import Contact from "./component/contact/Contact";
import { Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="sidebar"><NavBar /></div>
      <Route exact path="/" component={Home}/>
      
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/my-offer" component={Home} />
      <Route exact path="/portfolio" component={Home} />
      

      {/* <div className="content">
        <Home />
      </div> */}
      {/* <Index backend={PDFJSBackend} src="/resume.pdf" /> */}
    </div>
  );
}

export default App;
