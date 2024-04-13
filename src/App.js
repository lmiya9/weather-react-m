import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vancouver" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/mia-lee-515468234/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mia Lee
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/lmiya9/weather-react-m"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="ml-weather-react.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
