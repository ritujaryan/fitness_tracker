import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import img from '../../../../assets/images/normal.jpg'
import CardActionArea from "@material-ui/core/CardActionArea";
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Obesity() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
   >
  
    <Grid item xs={4}>
    <Card className={classes.root} style={{backgroundColor : '#cefdce'}}>
      <CardHeader
        
        title="Healthy"
      />
      <CardActionArea>
      <img src={img} style={{height: '40vh',width: '80vh'}} />
      <Divider/>
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          Congratulations your BMI is normal. It means that you are Healthy.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button size="small"><a href = 'https://familydoctor.org/health-guides-health-state-mind-body/'>Learn More</a></Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Typography paragraph>
          Just follow your diet plan, exercise regularly and be fit and healthy always
          </Typography>
          
          
        </CardContent>
        
      </Collapse>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>

  );
}
