import React from "react";
import Network from "./Components/Network";
import imgg from "./assets/imgg.png"
import "./index.css"

export default function App() {
  return (

  <Network>
    <div className="container">
      <img src={imgg} />
      <h1 className="head">Connected</h1>
      <h3 className="header">Secured Connection</h3>
    </div>
  </Network>

  );
}
