
import './App.css';
import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import FitnessTracker from './components/FitnessTracker/FitnessTracker'
import MainPage from './components/MainPage1/MainPage'
import BMI from './components/BMI/BMI'
import Aboutus from './components/aboutus/aboutus'
import WaterTracker from './components/mainpage/mainpage'
function App() {
  return (
    <div>
      <Switch>
       <Route exact path ="/">
         <FitnessTracker/>
       </Route>
       <Route exact path ="/trainers">
         <MainPage/>
       </Route>
       <Route exact path ="/bmi">
         <BMI/>
       </Route>
       <Route exact path ="/aboutus">
         <Aboutus/>
       </Route>
       <Route exact path ="/watertracker">
         <WaterTracker/>
       </Route>
       <Redirect to="/"/>
     </Switch>
    </div>
  );
}

export default App;
