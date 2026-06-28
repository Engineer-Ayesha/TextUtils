import React, { useState } from "react";
import './style.css';
export default function About(props) {
  return (
    <div>
      <div className="about-container" >
        <div className="accordion" id="accordionExample"  >
          <div className="accordion-item" style={{border:props.bgcolor==="white"?"1px solid black":"1px solid white",backgroundColor:props.bgcolor==="white"?"white":"#1f1f1f"}}>
            <h2 className="accordion-header">
              <button style={{backgroundColor:props.bgcolor==="white"?"white":"#1f1f1f",color:props.bgcolor==="white"?"black":"white"}}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong style={{color:props.bgcolor==="white"?"black":"white"}} >Analyze Your text</strong>
              </button>
            </h2>
            <div style={{backgroundColor:props.bgcolor==="white"?"white":"#1f1f1f"}}
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor:props.bgcolor==="white"?"white":"#1f1f1f"}}>
                <p  style={{color:props.bgcolor==="white"?"black":"white"}}>Quickly analyze your text with instant results like word count, character count, and reading time. 
                Helps you understand your content in a clean and simple way.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{border:props.bgcolor==="white"?"1px solid black":"1px solid white"}} >
            <h2 className="accordion-header">
              <button style={{backgroundColor:props.bgcolor==="white"?"white":"#1f1f1f"}}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong  style={{color:props.bgcolor==="white"?"black":"white"}} >Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor:props.bgcolor==="white"?"white":"#1f1f1f"}}>
                <p style={{color:props.bgcolor==="white"?"black":"white"}}>TextUtils is completely free with no hidden charges or subscriptions. 
                Use all features without any limitations.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{border:props.bgcolor==="white"?"1px solid black":"1px solid white"}}>
            <h2 className="accordion-header">
              <button style={{backgroundColor:props.bgcolor==="white"?"white":"#1f1f1f",color:props.bgcolor==="white"?"black":"white"}}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong style={{color:props.bgcolor==="white"?"black":"white"}}>Browser compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor:props.bgcolor==="white"?"white":"#1f1f1f",border:props.bgcolor==="white"?"1px solid black":"1 px solid white"}}>
                <p style={{color:props.bgcolor==="white"?"black":"white"}}>Works smoothly on all modern browsers without any installation required.You can use it anytime, anywhere directly from your browser.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
