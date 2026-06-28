import React  from 'react'
import './style.css';
import { useState } from 'react';
export default function Home(props) {
    const[data,setData]=useState("");
    const[error,setError]=useState("");
    const result=(e)=>{
        setData(e.target.value);
        setError("");
    }
    const clicked1=()=>{
        if(data.length!==0){
            setData(data.toUpperCase());
            props.alertFun("Converted to Uppercase","success");
        }else{
            setError("Please Enter some text!");
        }

    }
    const clicked2=()=>{
        if(data.length!==0){
            setData(data.toLowerCase());
            props.alertFun("Converted to Lowercase","success");
        }else{
            setError("Please Enter some text!");
        }
        
    }
    const clicked3=()=>{
        if(data.length!==0){
            setData("");
            props.alertFun("Text cleared!","success");
        }else{
            setError("Please Enter some text!");
        }
        
    }
    // const textareaRef=useRef();
    const clicked4=()=>{
        if(data.length!==0){
            navigator.clipboard.writeText(data);
            // document.getSelection().removeAllRanges();
            props.alertFun("Text copied to clipboard successfully","success");
        }else{
            setError("Please Enter some text!");
        }
        
    }
    const clicked5=()=>{
        if(data.length!==0){
            setData(data.split(/\s+/).join(" ").trim());
            props.alertFun("Extra spaces removed!","success");
        }else{
            setError("Please Enter some text!");
        }  
    }
  return (
    <div> 
        <div className='main-container' style={{backgroundColor:props.bgcolor}}>
            <div className='home-container'>
                <h3 className='home-head' style={{color:props.bgcolor==="white"?"black":"white"}}>Smart Text Analyzer</h3>
                {error && <p style={{color:"red",paddingLeft:30}}>{error}</p>}
                <div className='text-container'>
                    <textarea    className='home-text' value={data} onChange={result} style={{backgroundColor:props.bgcolor==="white"?"white":"#1f1f1f",color:props.bgcolor==="white"?"black":"white",border: error? "2px solid red": props.bgcolor==="white"?"1px solid black":"1px solid white",paddingLeft:10,paddingTop:3}}></textarea>
                </div>
                
                <div className='button-container'>
                    <button id='upperCase' style={{height: 40,width:120,fontSize:14}} className='buttons' onClick={clicked1}>To Uppercase</button>
                    <button id='lowerCase' style={{height: 40,width:120,fontSize:14}} className='buttons' onClick={clicked2}>To Lowercase</button>
                    <button id='clear' style={{height: 40,width:120,fontSize:14}} className='buttons' onClick={clicked3}>Clear Text</button>
                    <button id='copy' style={{height: 40,width:120,fontSize:14}} className='buttons' onClick={clicked4}>Copy Text</button>
                    <button id='extraSpaces' style={{height: 40,width:180,fontSize:14}}  className='buttons' onClick={clicked5}>Remove Extra-spaces</button>
                </div>
                <div className='summary-container'>
                    <h3 style={{color:props.bgcolor==="white" ?"black":"white"}}>Your Text Summary</h3>
                    <p style={{paddingTop:10,color:props.bgcolor==="white" ?"black":"white"}}> {data.trim().split(/\s+/).filter(word => word !== "").length} Words  {data.length} Characters</p>
                    <p style={{paddingTop:10,color:props.bgcolor==="white" ?"black":"white"}}> {0.008 * data.split(/\s+/).filter(word => word !== "").length} Minutes read</p>
                </div>
                <div className='preview-container'>
                    <h3 style={{fontWeight:'bolder',fontSize:25,color:props.bgcolor==="white" ?"black":"white"}}>Preview</h3>
                    <p style={{color:props.bgcolor==="white" ?"black":"white"}}>{data.length===0?"Nothing to Preview":data}</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
