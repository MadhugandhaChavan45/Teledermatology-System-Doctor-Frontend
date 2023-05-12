import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

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


function Navbar() {
    const classes = useStyles();
    const navigate = useNavigate();
    const handleLogout=()=>{
        // let token =localStorage.getItem(did);
        // doctor_logout.logout(token)
        //     .then((response) => {
        //         if (response.status === 200) {
        //             toast.success("Successfully logged out!!", {
        //                 position: "bottom-right",
        //                 autoClose: 1000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 progress: undefined,
        //             })
        //             // localStorage.removeItem(did);
        //             // localStorage.removeItem(did+"-"+token);
        //             navigate(`/`);
        //         }
        //
        //     })
        //     .catch((error) => {
        //         toast.error("Error Logging out!!", {
        //             position: "bottom-right",
        //             autoClose: 1000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //         })
        //
        //     });
        navigate(`/`);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Teledermatology System
                    </Typography>
                    <Button color="inherit" onClick={()=>navigate("/home")}>Home</Button>
                    <Button color="inherit" onClick={()=>navigate("/newrequest")}>New request</Button>
                    <Button color="inherit" onClick={()=>navigate("/viewdiagnosis")}>View Diagnosis</Button>
                    <Button color="inherit" onClick={()=>handleLogout()}>Logout</Button>
                </Toolbar>
            </AppBar>
            </div>
        );
};

export default Navbar;


