/*import React,{useContext} from 'react'
import{Card,CardHeader,CardContent,Typography,Dialog,DialogContent,DialogTitle,TableContainer,Table,TableBody,Paper, TableHead,TableRow,TableCell} from '@material-ui/core';
import useStyles from './style';
import {Line,Bar} from 'react-chartjs-2'
import {FitnessTrackerContext} from '../../../context/context';
import {singleCategories,resetCategories} from '../../../constants/category1';
const Cardlayout = () => {
    const classes =useStyles();
    resetCategories();
    const{actions1} = useContext(FitnessTrackerContext)
    //console.log(actions1)
    //const action1Type= actions1.filter((t) => t.type ===title);
    const Categories = singleCategories;
    //console.log(Categories);
    let quantity;
    let cate;
    actions1.forEach((t) =>{
        cate = Categories.find((c) => c.activity===t.activity)
        if(cate){
            quantity=cate.water
        }
        //console.log(cate);
        //console.log(cate.water);

    });
    //const cate=Categories.find((c) => actions1.activity);
    //const quantity=cate.water

    const chardata ={
        datasets:[
            {
                data:quantity,
                background:'red',
            }
        ],
        labels:Categories.map((c) =>c.activity),
    }
    console.log(quantity);
    return (
        <div>
          <Card>
                <CardHeader style={{textAlign:'center',fontWeight:'bold'}} variant="h1" title='Your Water Required' />
                <CardContent>
                    <Typography>Water Count : {quantity} ml</Typography>
                    { /*Doughnut Chart*/ 
                    /*<Line data={chardata}></Line>
                </CardContent>
            </Card>  
        </div>
    )
}

export default Cardlayout*/
import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import TextInput from '../TextInput/TextInput';
import{Card,CardHeader,CardContent,Typography,Dialog,DialogContent,DialogTitle,TableContainer,Table,TableBody,Paper, TableHead,TableRow,TableCell} from '@material-ui/core';
const Cardlayout = () => {

  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [age, setAge] = useState();
  const [water, setWater] = useState();
  const [waterClass, setWaterClass] = useState();

  const handleHeightChange = (event) => setHeight(event.target.value);
  const handleWeightChange = (event) => setWeight(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);

  const computeWater = () => {
    let waterValue = (((weight)*(height)*10)/20).toFixed(2);
    setWater(waterValue);
    let waterClass = getWater(waterValue);
    setWaterClass(waterClass);
    setHeight("")
    setWeight("")
    setAge("")
    
  };

  const getWater = (water) => {
    if (water <1100) {
        return <div style = {{color : 'white'}}>Your water requirement is low. You should drink at most 1L of water </div>
    }
    if (water >= 1100 && water <1200) {
        return <div style = {{color : 'white'}}>Your water requirement is not that high. You should drink at least 1100 ml of water</div>;
    }
    if (water >= 1200 && water <1300) {
        return <div style = {{color : 'white'}}>Your water requirement is less. You should drink at leats 1200 ml of water</div>;
    }
    if (water >= 1300 && water < 1400) {
      return <div style = {{color : 'white'}}>Your water requirement is no high. You should drink at least 1300 ml of water</div>;
    }
    if (water >=1400 && water < 1500) {
      return <div style = {{color : 'white'}}>Your water requirement is moderate. You should drink at least 1400 ml of water</div>;
    }
    if (water >= 1500 && water <1600) {
      return <div style = {{color : 'white'}}>Your water requirement is little high. You should drink at least 1500 ml of water</div>;
    }
    if (water >= 1600 && water <1700) {
        return <div style = {{color : 'white'}}>Your water requirement is good enough. You should drink at least 1600 ml of water</div>;
    }
    if (water >= 1700 && water <1800) {
        return <div style = {{color : 'white'}}>Your water requirement is high. You should drink at least 1700 ml of water</div>;
    }
    if (water >= 1800 && water <1900) {
        return <div style = {{color : 'white'}}>Your water requirement is quite high. You should drink at least 1800 ml of water</div>;
    }
    if (water >= 1900 && water <2000) {
        return <div style = {{color : 'white'}}>Your water requirement is very high. You should drink at least 2L of water</div>;
    }
    else{
        return <div style = {{color : 'white'}}>Your water requirement is enourmous. You should drink at least 2.5L of water</div>;
    }
  };

  return (
      <div>
          <Card style={{backgroundColor:'black'}}>
          <CardHeader style={{textAlign:'center',fontWeight:'bold' ,color:'white'}} variant="h1" title='Your Water Required' />
          <CardContent>
    <div className="App">
        
    <span className="container" style ={{backgroundColor: "black",left: '0',
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
          color="green"
        />
      </div>
      <br/>
      <div >
        <TextInput
          label="Weight -  "
          placeholder="Enter weight in kg"
          handleChange={handleWeightChange}
          value={weight}
          color="black"
        />
      </div>
      <div >
        <TextInput
          label="Age -  "
          placeholder="Enter age"
          handleChange={handleAgeChange}
          value={age}
          color="black"
        />
      </div>
      <br/>
      <div>
        <Button style={{color: 'white',background: 'tomato'}} label="CALCULATE" onClick={computeWater} >CALCULATE</Button>
      </div>
      <div>
        {
          isNaN(water)?null:<div style={{color: 'white'}} ><br/>Your Required Water Intake is {water} ml</div> 
        }
        
      </div>
      <div >
        <h3>{waterClass}</h3>
      </div>
    </span>
    </div>
    </CardContent>
    </Card>
    </div>
    
  );
};

export default Cardlayout;