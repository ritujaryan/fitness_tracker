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
import img from '../../../../assets/images/overweight.jpg'
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
  
    <Grid item xs={12} sm={5} >
    <Card className={classes.root} style={{backgroundColor : '#cefdce'}}>
      <CardHeader
        
        title="Overweight"
      />
      <CardActionArea>
      <img src={img} style={{height: '40vh',width: '45vh'}} />
      <Divider/>
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          Your BMI is high than normal. It means that you are Overweight. Expand this to know more about Overweights.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button size="small"><a href = 'https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight'>Learn More</a></Button>
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
          <Typography paragraph>Meaning of Overweight</Typography>
          <Typography paragraph>
          Being overweight or fat is having more body fat than is optimally healthy. Being overweight is especially common where food supplies are plentiful and lifestyles are sedentary.
          </Typography>
          <Typography paragraph>Treatment</Typography>
          <Typography paragraph>
          The best way to treat any overweight person is to eat a healthy, reduced-calorie diet and exercise regularly. To do this you should:
          <ul>

<li>Eat a balanced, calorie-controlled diet as recommended by your GP or weight loss management health professional (such as a dietitian)</li>
<li>Join a local weight loss group</li>
<li>Take up activities such as fast walking, jogging, swimming or tennis for 150 to 300 minutes (two-and-a-half to five hours) a week</li>
<li>Eat slowly and avoid situations where you know you could be tempted to overeat</li>
</ul>
          </Typography>
          
        </CardContent>
        
      </Collapse>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>

  );
}
