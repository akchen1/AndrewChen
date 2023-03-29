import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 
// import {HashRouter, Route, Routes} from "react-router-dom";
// import {ErrorPage} from "./components/ErrorPage";
// import {UnityProject} from "./components/UnityProject";
// import { ProjectDetails } from "./components/ProjectDetails";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
    {/* <HashRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<App />}
          errorElement={<ErrorPage />}
        ></Route>
        <Route path="/unityproject/:title" element={<ProjectDetails />}></Route>
        <Route path="/unityproject/:title/play" element={<UnityProject />}></Route>
      </Routes>
    </HashRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
