import React from 'react'
import {NavLink} from 'react-router-dom';
import {Grid,Button} from '@material-ui/core';
//import background from '../../assets/images/water.jpg';
import UseStyles from './style';
import Left from './left/left';
import Cardlayout from  './cardlayout/cardlayout';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'
const mainpage = () => {
    const classes=UseStyles();
    return (
        <div >
            <NavBar/>
            {/* <Button style={{background:'white',margin:'20px',float:'left'}}><NavLink to="/">Fitness Tracker</NavLink></Button> */}
            <Grid  className={classes.grid} container spacing={0} alignItems = 'center' justify = 'center' style={{height:'100vh'}}>
             <Grid item xs={12} sm={5} style={{color:'white'}}>
                    <Left/>
            </Grid>
            <Grid item xs={12} sm={5} style={{color:'white'}}>
                    <Cardlayout/>
            </Grid>
             </Grid> 
             <Footer/>
        </div>
    )
}

export default mainpage
