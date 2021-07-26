import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const MusicCard = (props: any) => {
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