import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core';
import Navbar from "../../components/navbar/Navbar";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

function Home() {
    const classes = useStyles();

    return (
        <div>
            <Navbar/>
            <Container className={classes.container}>
                <Typography variant="h4" className={classes.title}>
                    Welcome to Derma System!
                </Typography>
                {/*<Typography variant="body1">*/}
                {/*    Derma System*/}
                {/*</Typography>*/}
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Get Started
                </Button>
            </Container>
        </div>
    );
}

export default Home;