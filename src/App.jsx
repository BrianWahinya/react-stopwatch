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
        <a href="https://brianwebportal.netlify.app" target="_blank">
          {new Date().getFullYear()} &copy; Brian Wahinya
        </a>
      </div>
    </>
  );
}

export default App;
