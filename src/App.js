import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Intro} from "./components/Intro";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";
import {ErrorPage} from "./components/ErrorPage";
import {UnityProject} from "./components/UnityProject";

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import { ProjectDetails } from "./components/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route
            exact path="/"
            element={<><Intro></Intro><Skills></Skills><Projects></Projects></>}
            errorElement={<ErrorPage />}
          ></Route>
          <Route path="/unityproject/:title" element={<ProjectDetails />}></Route>
          <Route path="/unityproject/:title/play" element={<UnityProject />}></Route>
      </Routes>
        
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
