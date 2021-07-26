import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

const useStyles = makeStyles({
  root1: {
    width: 845,
  },
  root2: {
    width: 445,
  },
  media: {
    height: 240,
  },
});

const MusicTracks = (props: any) => {
    
  const classes = useStyles();

  return <React.Fragment>
    <Card className={classes.root1}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/images/logo.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bruno Mars
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            382K Fans
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        <Card className={classes.root2}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Top Tracks
              </Typography>
              <List>
        {['In my room', 'You and I', "Don't you know", "Fliestones", "Here comes the sun"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index+1}</ListItemIcon>
            <ListItemText primary={text} />
            <ListItemText primary="02:30" />
          </ListItem>
        ))}
      </List>
            </CardContent>
          </CardActionArea>
        </Card>
    </React.Fragment>
}

export default MusicTracks;