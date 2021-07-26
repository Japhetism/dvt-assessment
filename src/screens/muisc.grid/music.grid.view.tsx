import React, {useEffect, useState} from 'react';
import MusicCard from '../../components/music.card';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    grid: {
     padding: 30
    },
    cardWidth: {
        width: 345,
    },
    cardHeight: {
        height: 240,
    }
}));

const MusicGridView = (props: any) => {

  const classes = useStyles();
    
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const artists = props?.artists?.artistData?.artistList?.data;
    setArtists(artists)
  }, [props])

    return (
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              {artists && artists.map((artist: any) => (
                <Grid key={artist.id} item className={classes.grid}>
                  <MusicCard 
                    key={`${Math.random()}${artist.id}`}
                    width={classes.cardWidth}
                    height={classes.cardHeight}
                    data={artist}
                />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
    );
}

export default MusicGridView;