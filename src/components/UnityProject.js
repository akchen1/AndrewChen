import React, {useState, useCallback} from "react";
import {useParams} from "react-router-dom";
import {Unity, useUnityContext} from "react-unity-webgl";
import "../styles/UnityProject.css";

export const UnityProject = () => {
  let {title} = useParams();
  title = title.replace("!", "");
  console.log(useParams());
  const {unityProvider, isLoaded, loadingProgression, requestFullscreen} =
    useUnityContext({
      loaderUrl: `/UnityProjects/${title}/BuildFiles/Build.loader.js`,
      dataUrl: `/UnityProjects/${title}/BuildFiles/Build.data`,
      frameworkUrl: `/UnityProjects/${title}/BuildFiles/Build.framework.js`,
      codeUrl: `/UnityProjects/${title}/BuildFiles/Build.wasm`,
    });

  // We'll round the loading progression to a whole number to represent the
  // percentage of the Unity Application that has loaded.
  const loadingPercentage = Math.round(loadingProgression * 100);

  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );

  useCallback(
    function () {
      // A function which will update the device pixel ratio of the Unity
      // Application to match the device pixel ratio of the browser.
      const updateDevicePixelRatio = function () {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      // A media matcher which watches for changes in the device pixel ratio.
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`
      );
      // Adding an event listener to the media matcher which will update the
      // device pixel ratio of the Unity Application when the device pixel
      // ratio changes.
      mediaMatcher.addEventListener("change", updateDevicePixelRatio);
      return function () {
        // Removing the event listener when the component unmounts.
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio]
  );

  function SetFullScreen() {
    requestFullscreen(true);
  }

  return (
    <div className="container">
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity
        className="unity"
        unityProvider={unityProvider}
        devicePixelRatio={devicePixelRatio}
      />
      <button onClick={SetFullScreen}>Enter Fullscreen</button>
    </div>
  );
};
