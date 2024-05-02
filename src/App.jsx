import { Footer, Header, Stopwatch } from "./components";
import { Cursor } from "react-custom-cursors";
import "react-custom-cursors/dist/index.css";
import "./styling/App.css";

function App() {
  return (
    <>
      <Cursor
        animation="beat"
        color="#898989"
        dotColor="#272727"
        hasCursor
        hasDot
        isHollow
        mixBlendMode
        size="sm"
      />
      <Header />
      <Stopwatch />
      <Footer />
    </>
  );
}

export default App;
