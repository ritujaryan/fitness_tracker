import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import TextInput from "./TextInput/TextInput";
// import Button from "./Button/Button";
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'
import Obesity from './Cards/Obesity/Obesity'
import Overweight from './Cards/Overweight/Overweight'
import Underweight from './Cards/Underweight/Underweight'
import Normal from './Cards/Normal/Normal'


const BMI = () => {


    
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [bmiClass, setBmiClass] = useState();

  const handleHeightChange = (event) => setHeight(event.target.value);
  const handleWeightChange = (event) => setWeight(event.target.value);

  const computeBmi = () => {
    let bmiValue = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmiValue);
    let bmiClass = getBmi(bmiValue);
    setBmiClass(bmiClass);
    setHeight("")
    setWeight("")
  };

  const getBmi = (bmi) => {
    
    if (bmi < 18.5) {
      return <Underweight/>;
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return <Normal/>
    }
    if (bmi >= 25 && bmi < 29.9) {
      return <Overweight/>;
    }
    if (bmi >= 30) {
      return <Obesity/>;
    }
  };

  return (
      <div><NavBar/>

<div style= {{textAlign: 'center', alignContent :'center',justify: 'center'}}><h1 style = {{paddingInline: '1%',color: 'white', justify: 'center',display: 'inline-block', alignSelf: 'middle'}}>BMI Calculator</h1></div>
    <div className="App">
        
    <span className="container" style ={{backgroundColor: "lightseagreen",left: '0',
  right: '0',width: '50%',
  }}>
      {/* <div
        style={{
          display: "block",
          width: "50%",
          margin: "2px auto",
          padding: "10px",
          boxSizing: "border-box",
          backgroundColor: "lightseagreen"
        }}
      >
        
      </div> */}
      
      <div >
        <TextInput
          label="Height -  "
          placeholder="Enter height in cm"
          handleChange={handleHeightChange}
          value={height}
          color="white"
        />
      </div>
      <br/>
      <div >
        <TextInput
          label="Weight -  "
          placeholder="Enter weight in kg"
          handleChange={handleWeightChange}
          value={weight}
          
        />
        
      </div>
      <br/>
      <div>
        <Button style={{color: 'white',background: 'tomato'}} label="CALCULATE" onClick={computeBmi} >CALCULATE</Button>
      </div>
      <div>
        {
          isNaN(bmi)?null:<div style={{color: 'white'}} ><br/><h2>Your BMI is {bmi}</h2></div> 
        }
        
      </div>
      <div >
        <h3>{bmiClass}</h3>
      </div>
    </span>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Footer/>
    </div>
    
  );
};

export default BMI;
