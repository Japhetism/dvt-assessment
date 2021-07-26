import React, {useEffect, useState} from 'react';
import MusicCard from '../../components/music.card';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

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

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event: any) => {
        setSpacing(Number(event.target.value));
    };
    
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const artists = props?.artists?.artistData?.artistList?.data;
        console.log(artists)
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