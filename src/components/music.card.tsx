import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      width: 345,
    },
    media: {
      height: 240,
    },
});

const MusicCard = (props: any) => {

  console.log(props)
    
  const classes = useStyles();

    return (
      <Link to={`artist/${props?.data?.id}`}>
        <Card className={props.width}>
          <CardActionArea>
            <CardMedia
              className={props?.height}
              image={props?.data?.picture_medium}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props?.data?.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {props?.data?.nb_fan}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
    );
}

export default MusicCard;