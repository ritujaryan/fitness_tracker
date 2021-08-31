import React from 'react'
import {NavLink} from 'react-router-dom';
import {Button,Grid} from '@material-ui/core';
import UseStyles from './style';
import './index.css';
import CardLayout from './cardlayout/cardlayout';
import CardLayout1 from './cardlayout1/cardlayout1';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'
const aboutus = () => {
    const classes=UseStyles();
    return (
        <div >
            <NavBar/>
            <div style= {{textAlign: 'center', alignContent :'center',justify: 'center'}}><h1 style = {{paddingInline: '1%',color: 'white', justify: 'center',display: 'inline-block', alignSelf: 'middle'}}>About Us</h1></div>
            {/* <Button style={{background:'white',margin:'20px',float:'left'}}><NavLink to="/">Fitness Tracker</NavLink></Button> */}
            <Grid  className={classes.grid} container spacing={0} alignItems = 'center' justify = 'center' style={{height:'100vh'}}>
             <Grid item xs={12} sm={3} style={{color:'black'}}>
                    <CardLayout/>
            </Grid>
            <Grid item xs={12} sm={3} style={{color:'black'}}>
                    <CardLayout1/>
            </Grid>
             </Grid>
             <Footer/>
        </div>
    )
}

export default aboutus
