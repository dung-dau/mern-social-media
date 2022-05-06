import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';

const App = () => {
    // the useStyles hook uses the styles from 
    // the corresponding makestyles hook from
    // ./styles
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch])
    
    return (
        // The container component centers content horizontally
        // The container is bounded by the maxWidth prop value
        <Container maxWidth="lg">
            {/* "Memories" Header */}
            {/* AppBar displays is a component that is used to contain information
                and actions that are related to the current screen(example: navigation)
            */}
            {/* position static sets the positioning to static which means put the element
                into its normal position in the document flow (default)
            */}
            <AppBar className={classes.appBar} position="static" color="inherit">
                {/* A material UI component for styling text */}
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            {/* a component that adds a grow animation to the child element/component */}
            <Grow in>
                <Container>
                    {/* creates a responsive layout grid that adapts to screensize and orientation */}
                    {/* grids are in a 12-column grid layout */}
                    {/* the number inside of size props states how many columns should be taken up */}
                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        {/* Posts section */}
                        <Grid item xs={12} sm ={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        {/* Form section */}
                        <Grid item xs={12} sm ={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;