import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import img from '../../../assets/images/code.jpeg';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import useStyles from './style';
import {NavLink} from 'react-router-dom';
const CardLayout1 = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <img src={img} style={{height: '40vh',width: '48vh'}}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" float="middle">
              O(1) Coding Club
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            This club guides undergraduates to grab their dream jobs, guides students with exams like GRE and GATE. We post job opportunities for undergraduates so that they do not miss any, make videos on interview experiences of placed students in those companies. We help students with the knowledge they need to gather to do well in those opportunities with the help of videos on those topics.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <a href="https://www.linkedin.com/in/o-1-coding-club/?originalSubdomain=in">Linkedin Profile</a>
        </CardActions>
      </Card>
    )
}

export default CardLayout1