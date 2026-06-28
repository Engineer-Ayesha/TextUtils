import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default function Header(props) {
  const [icon, setIcon] = useState(false);
  const Icon = () => {
    if (icon === false) {
      setIcon(true);
    } else {
      setIcon(false);
    }
  };
  return (
    <div>
      <div
        className="navbar"
        style={{
          backgroundColor: props.bgcolor === "white" ? "#F8F9FA" : "#1f1f1f",
        }}
      >
        <div className="links" id="links-div">
          <h3
            style={{ color: props.bgcolor === "white" ? "black" : "white" }}
            className="app-name"
          >
            TextUtils
          </h3>
          <ul className="unorder">
            <li className="list">
              <Link to="/">Home</Link>
            </li>
            <li className="list">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div id="color-modes" className="links">
          <div className="form-check form-switch" style={{ marginRight: 30 }}>
            <input
              style={{ cursor: "pointer" }}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              onChange={props.blueMode}
            />
            <label
              style={{ color: props.bgcolor === "white" ? "black" : "white" }}
              className="form-check-label"
              htmlFor="switchCheckDefault"
            >
              Blue Mode
            </label>
          </div>
          <div className="form-check form-switch" style={{ marginLeft: 10 }}>
            <input
              style={{ cursor: "pointer" }}
              onChange={props.greenMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
            />
            <label
              style={{ color: props.bgcolor === "white" ? "black" : "white" }}
              className="form-check-label"
              htmlFor="switchCheckDefault"
            >
              Green Mode
            </label>
          </div>
          <div className="form-check form-switch" style={{ marginLeft: 70 }}>
            <input
              style={{ cursor: "pointer" }}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              onChange={props.toggle}
            />
            <label
              className="form-check-label"
              htmlFor="switchCheckDefault"
              style={{ color: props.bgcolor === "white" ? "black" : "white" }}
            >
              {" "}
              Dark Mode{" "}
            </label>
          </div>
        </div>
        <i
          onClick={Icon}
          id="hamburger-icon"
          style={{
            color: props.bgcolor === "white" ? "black" : "white",
            fontSize: 25,
            paddingBottom: 15,
            paddingRight: 10,
          }}
          className="fa-solid fa-bars"
        ></i>
      </div>
      <div style={{backgroundColor:props.bgcolor==="white"?"white":"#1f1f1f"}} className={icon ? "hamburger-class" : "modes-div"}>
        <div
          className="form-check form-switch"
          style={{ marginLeft: 5, marginTop: 10 }}
        >
          <input
            style={{ cursor: "pointer" }}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
            onChange={props.blueMode}
          />
          <label
            style={{ color: props.bgcolor === "white" ? "black" : "white" }}
            className="form-check-label"
            htmlFor="switchCheckDefault"
          >
            Blue Mode
          </label>
        </div>
        <div
          className="form-check form-switch"
          style={{ marginLeft: 5, marginTop: 5 }}
        >
          <input
            style={{ cursor: "pointer" }}
            onChange={props.greenMode}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
          />
          <label
            style={{ color: props.bgcolor === "white" ? "black" : "white" }}
            className="form-check-label"
            htmlFor="switchCheckDefault"
          >
            Green Mode
          </label>
        </div>
        <div
          className="form-check form-switch"
          style={{ marginLeft: 5, marginTop: 10 }}
        >
          <input
            style={{ cursor: "pointer" }}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
            onChange={props.toggle}
          />
          <label
            className="form-check-label"
            htmlFor="switchCheckDefault"
            style={{ color: props.bgcolor === "white" ? "black" : "white" }}
          >
            {" "}
            Dark Mode{" "}
          </label>
        </div>
      </div>
    </div>
  );
}
