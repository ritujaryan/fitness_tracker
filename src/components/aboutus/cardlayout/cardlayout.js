import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import img from '../../../assets/images/about.jpeg';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import {NavLink} from 'react-router-dom';
const CardLayout = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <CardActionArea>
        <img src={img} style={{height: '40vh',width: '53vh'}}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Rituj and Parth
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Parth: I am Parth Dhorajiya, studying in Shri Ramdeobaba College . My Branch is 'INFORMATION TECHNOLOGY'. My aim is "To be a partner of choice in our focused area of expertise at global level by providing solutions."
            Rituj: I am Rituj Aryan, studying in Shri Ramdeobaba College. My Branch is 'INFORMATION TECHNOLOGY'. My aim is "To develop in a constant manner and become a leading performer in this competitive global marketplace."
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <a href="https://www.linkedin.com/in/o-1-coding-club/?originalSubdomain=in">More About Us</a>
        </CardActions>
      </Card>
    )
}

export default CardLayout