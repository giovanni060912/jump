import React from "react";
import "./App.css";
import caderno from "./caderno.png";
import { Icon } from "@iconify/react";
import ellipsisVertical from "@iconify-icons/ion/ellipsis-vertical";

function App() {
  return (
    <body>
      <div className="App">
        <div className="box1">
          <h1>Default State</h1>
          <img src={caderno} />
          <h3>Corporate Bilaws</h3>
          <p>
            An internal document that details the <br /> operating rules for the
            corporation and are <br /> typically adopted at the organizational{" "}
            <br />
            meeting of the board of directors.
          </p>
          <button className="view">View document</button>
        </div>
        <div className="space"></div>
        <div className="box2">
          <h1>Houver State</h1>
          <ul>
            <img src={caderno} />
            <a>
              <Icon icon={ellipsisVertical} />
            </a>
          </ul>
          <h3>Corporate Bilaws</h3>
          <p>
            An internal document that details the <br /> operating rules for the
            corporation and are <br /> typically adopted at the organizational{" "}
            <br />
            meeting of the board of directors.
          </p>
          <button className="view">View document</button>
        </div>
        <div className="but">
          <button className="dow">Download</button>
          <button className="dow">Print</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </body>
  );
}

export default App;
