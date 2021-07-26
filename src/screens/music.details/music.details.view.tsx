import React, {useEffect, useState} from 'react';
import MusicCard from '../../components/music.card';
import MusicTracks from './components/music.tracks';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
    details: {
        paddingTop: 20,
    },
    song: {
        padding: 22,
    },
    cardWidth: {
        width: 245,
    },
    cardHeight: {
        height: 140,
    },
    album: {
        marginBottom: 40,
        textAlign: 'center',
    },
    card: {
        paddingTop: 50
    }
}));

const MusicDetailsView = (props: any) => {

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event: any) => {
        setSpacing(Number(event.target.value));
    };
    
    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        const universities = props?.universities?.universityData?.universityList?.responseData;
        setUniversities(universities)
    }, [props])

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.details}>
                <Grid container justifyContent="center">
                <MusicTracks 
                        key={Math.random()}
                        data={universities}
                    />
                </Grid>
            </Grid>  
            <Grid item xs={12} className={classes.song}>
                <Grid container justifyContent="center">
                    {[0, 1, 2,3].map((value) => (
                        <Grid key={value} item className={classes.card}>
                        <MusicCard 
                            key={`${Math.random()}${value}`}
                            data={universities}
                            width={classes.cardWidth}
                            height={classes.cardHeight}
                        />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default MusicDetailsView;