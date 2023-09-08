import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import node from "/node.png";
import boostrap from "/boostrap.png";
import discord from "/discord.png";
import github from "/github.png";
import jwt from "/jwt.png";
import mongo from "/mongo.png";
import redux from "/redux.png";
import sequelize from "/sequelize.png";
import Spinner from "react-bootstrap/Spinner";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Spinner animation="border" variant="danger" />
      <div className="father">
        <div className="circle">
          <div className="content">
            <span class="loader">
              <span class="loader-inner"></span>
            </span>
            <h2>Loading...</h2>
            <p>Developer FullStack</p>
          </div>

          <div className="react">
            <a href="" target="_blank">
              <img src={reactLogo} className="logo " alt="React logo" />
            </a>
          </div>
          <div className="boostrap">
            <a href="" target="_blank">
              <img src={boostrap} className="logo" alt="Vite logo" />
            </a>
          </div>
          <div className="github">
            <a href="" target="_blank">
              <img src={github} className="logo" alt="Vite logo" />
            </a>
          </div>
          <div className="jwt">
            <a href="" target="_blank">
              <img src={jwt} className="logo" alt="Vite logo" />
            </a>
          </div>
          <div className="mongo">
            <a href="" target="_blank">
              <img src={mongo} className="logo" alt="Vite logo" />
            </a>
          </div>
          <div className="node">
            <a href="" target="_blank">
              <img src={node} className="logo" alt="Vite logo" />
            </a>
          </div>

          <div className="redux">
            <a href="" target="_blank">
              <img src={redux} className="logo" alt="Vite logo" />
            </a>
          </div>
          <div className="sequelize">
            <a href="" target="_blank">
              <img src={sequelize} className="logo" alt="Vite logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </>
  );
}

export default App;
