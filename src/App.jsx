import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <header>
          Web Developer Portfolio website built in reactjs using tailwindcss as
          frontend framework and design principles employed
        </header>
        <main>main section</main>
        <footer>Footer content</footer>
      </div>
    </>
  );
}

export default App;
