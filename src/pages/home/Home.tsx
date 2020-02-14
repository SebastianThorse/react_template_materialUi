import React from 'react';
import './Home.scss';
import {Box, Grid, Typography} from "@material-ui/core";

const Home = () => {
    return (
        <>
            <Box>
                <Grid container direction="row">
                    <Grid item xs={6}>
                        <Grid item>
                            <Typography variant="h1">h1 - Test</Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="h2">h2 - Test</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h3">h3 - Test</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4">h4 - Test</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">h5 - Test</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">h6 - Test</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">body1 - Test</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">body2 - Test</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid item>
                            <Typography variant="h1">h1 - Regular</Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="h1">h1 - Bold</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h1">h1 - Light</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Home;