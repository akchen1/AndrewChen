import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {HashRouter, Route, Routes} from "react-router-dom";
import {ErrorPage} from "./components/ErrorPage";
import {UnityProject} from "./components/UnityProject";

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "AndrewChen",
//         element: <App />,
//         children: [,],
//       },
//     ],
//   },
//   {
//     path: "unityproject/:title",
//     element: <UnityProject />,
//     errorElement: <ErrorPage />,
//   },
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router}></RouterProvider> */}
    {/* <App /> */}
    <HashRouter>
      {/* <div>
        <Routes>
          <Route exact path="/" component={App} errorElement={ErrorPage} />
          <Route
            path="/about"
            component={UnityProject}
            errorElement={ErrorPage}
          />
        </Routes>
      </div> */}
      {/* <App></App> */}
      <Routes>
        <Route path="/" element={<App />} errorElement={<ErrorPage />}></Route>

        <Route path="/unityproject/:title" element={<UnityProject />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
