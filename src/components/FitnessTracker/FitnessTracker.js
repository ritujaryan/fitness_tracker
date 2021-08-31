import React from 'react'
import{ Grid,Button} from '@material-ui/core';
import CardLayout from './CardLayout/CardLayout';
import useStyles from './style';
import Middle from './Middle/Middle';
import {NavLink} from 'react-router-dom';
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
const FitnessTracker = () => {
    const classes = useStyles();
    return (
        <div>
            <NavBar/>
            {/* <Button style= {{background:'white',margin:'20px',float:'right'}}><NavLink to="/mainpage">Main Page</NavLink></Button>  */}
            <br/>
             <Grid className={classes.grid} container spacing={0} alignItems = 'center' justify = 'center' style={{height:'90vh'}}>
                <Grid item xs={12} sm={4} style={{color:'white'}}>
                        <CardLayout title="Intake"/>
                </Grid>
                <Grid item xs={12} sm={3} style={{color:'white'}}>
                        <Middle/>
                </Grid>
                <Grid item xs={12} sm={4} style={{color:'white'}}>
                    <CardLayout title="Workout"/>
                </Grid>
                
             </Grid>
             <Footer/>
             
             <div>
             
             </div>
        </div>
    )
}
 
export default FitnessTracker