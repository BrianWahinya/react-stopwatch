import { Stopwatch } from "./components";
import icon_stopwatch from "/icon_stopwatch.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img
          src={icon_stopwatch}
          className="icon stopwatch"
          alt="Stopwatch icon"
        />
      </div>
      <Stopwatch />
      <div className="footer">
        <span>{new Date().getFullYear()} &copy;</span>
        <a href="https://brianwebportal.netlify.app" target="_blank">
          {" "}
          Brian Wahinya{" "}
        </a>
      </div>
    </>
  );
}

export default App;
