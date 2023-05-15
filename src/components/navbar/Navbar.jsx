import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import {useNavigate, useParams} from 'react-router-dom';
import logout from "../../services/Logout";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Navbar(props) {
    const classes = useStyles();
    const navigate = useNavigate();
    // const pid=props.pid;
    // console.log("Inside navbar",pid)
    const {pid}=useParams();
    console.log("Here Navbar",pid);
    const handleLogout=()=>{
        logout.signout();
        // navigate(`/`);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Teledermatology System
                    </Typography>
                    {/*<Button color="inherit" onClick={()=>navigate("/home",{state:{pid:pid}})}>Home</Button>*/}
                    <Button color="inherit" onClick={()=>navigate(`/home/${pid}`)}>Home</Button>
                    <Button color="inherit" onClick={()=>navigate(`/newrequest/${pid}`)}>New request</Button>
                    <Button color="inherit" onClick={()=>navigate(`/viewdiagnosis/${pid}`)}>View Diagnosis</Button>
                    <Button color="inherit" onClick={()=>handleLogout()}>Logout</Button>
                </Toolbar>
            </AppBar>
            </div>
        );
};

export default Navbar;


