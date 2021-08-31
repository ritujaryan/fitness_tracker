import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import { Button, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import img from '../../assets/images/fitness3.jpg'
import img1 from '../../assets/images/fitness4.png'
import img2 from '../../assets/images/yug.jpg'

const MainPage = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
      {/* <p style={{ color: "white" }}>Hello I am Main Page</p> */}
      
      <NavBar/><br/>
      <div style= {{textAlign: 'center', alignContent :'center',justify: 'center'}}><h1 style = {{paddingInline: '1%',color: 'white', justify: 'center',display: 'inline-block', alignSelf: 'middle'}}>Trainers</h1></div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        transform= 'translate(-50%, -50%)'
        style={{ left: '50%' ,right: '50%' ,height: "90vh" }}
      >
        <Grid item xs={12} sm={4} style={{ color: "white" }} >
          <Card className={classes.root}>
            <CardActionArea>
              <img src={img} style={{height: '50vh',width: '65vh'}} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Phil Heath
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Phil won seven consecutive Mr. Olympia wins from 2011 before being dethroned by Shawn Rhoden in 2018. 
                Also known by his nickname “The Gift,” he boosted his body from 185 pounds to 215 pounds of pure muscle. 
                He kept training harder while growing larger, picking up several other titles including his IFBB pro card and seven Mr. Olympia wins.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            
            <a href = 'https://www.instagram.com/philheath/?hl=en'> Contact</a>
                
          
            
            </CardActions>
          </Card>
          </Grid>

        <Grid item xs={12} sm={4} style={{ color: "white" }} >
          <Card className={classes.root}>
            <CardActionArea>
               {/* <CardMedia 
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="../../assets/images/fitness3.jpg"
                title="Contemplative Reptile"
              />  */}
              <img src={img1} style={{height: '50vh',width: '65vh'}} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Dexter Jackson
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Dexter is the oldest and most experienced top Olympian constantly competing. His streak started in 1999. Dexter plans to compete in the 2020, Mr. Olympia, and 
                announced that it would be his final contest. He recently turned 50 years old and has already planned for his retirement.Dexter owns a record of 28 professional 
                bodybuilding titles from the IFBB and has won the Arnold title 5 times more than any other.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            
            <a href = 'https://www.instagram.com/mrolympia08/?hl=en'> Contact</a>
          
            
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} style={{ color: "white" }} >
          <Card className={classes.root}>
            <CardActionArea>
               {/* <CardMedia 
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="../../assets/images/fitness3.jpg"
                title="Contemplative Reptile"
              />  */}
              <img src={img2} style={{height: '50vh',width: '65vh'}} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Yugant
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Yugant won seven consecutive Mr. Olympia wins from 2011 before being dethroned by Shawn Rhoden in 2018. 
                Also known by his nickname “The Gift,” he boosted his body from 185 pounds to 215 pounds of pure muscle. 
                He kept training harder while growing larger, picking up several other titles including his IFBB pro card and seven Mr. Olympia wins.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            
            <a href = 'https://www.instagram.com/mayur_rawte/?hl=en'> Contact</a>
          
            
            </CardActions>
          </Card>
        </Grid>

        
      </Grid><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div>
        <Footer/>
      </div>
      </div>
    </div>
  );
};

export default MainPage;
