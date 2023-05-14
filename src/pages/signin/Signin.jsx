import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import signin from "../../services/Signin";
import {toast} from "react-toastify";
import axios from "axios";
import app from "../../App";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(`Username: ${username}, Password: ${password}`);
    //     const bodyParameters={
    //         'Username':username,
    //         'Password':password
    //     }
    //     console.log(bodyParameters)
    //     signin.login(bodyParameters)
    //         .then((response) => {
    //             console.log(response)
    //             if (response.status === 200) {
    //                 toast.success("Successfully logged in!!", {
    //                     position: "bottom-right",
    //                     autoClose: 1000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                 })
    //                 // localStorage.setItem(response.data['id'],response.data['token'])
    //                 // window.localStorage.setItem(response.data['id']+"-"+response.data['token'],response.data['id']+"-"+response.data['role'])
    //                 // nav(`/home/${response.data['id']}/${response.data['name']}`);
    //                 // // ${response.data['id']}
    //
    //             }
    //         })
    // }

    // const [token, setToken] = useState(null);

    // // function to check if the user is authenticated
    // const isAuthenticated = () => {
    //     return token !== null;
    // }
    //
    // useEffect(() => {
    //     // check for the token in cookies when the component mounts
    //     const tokenFromCookie = getCookie('token');
    //     if (tokenFromCookie) {
    //         setToken(tokenFromCookie);
    //     }
    // }, []);

    // function to get a cookie by name
    // const getCookie = (name) => {
    //     const cookieString = document.cookie;
    //     if (cookieString.length > 0) {
    //         const cookieArray = cookieString.split(';');
    //         for (let i = 0; i < cookieArray.length; i++) {
    //             const cookie = cookieArray[i].trim();
    //             if (cookie.substring(0, name.length + 1) === (name + '=')) {
    //                 return decodeURIComponent(cookie.substring(name.length + 1));
    //             }
    //         }
    //     }
    //     return null;
    // }

    // function to set a cookie
    // const setCookie = (name, value, days) => {
    //     const expires = new Date();
    //     expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    //     document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + expires.toUTCString() + ';path=/';
    // }

    // function to remove a cookie
    // const removeCookie = (name) => {
    //     document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    // }

    // function to handle user login
    const handleLogin = async (event) => {
        try {
            event.preventDefault();
            console.log(`Username: ${username}, Password: ${password}`);
            const bodyParameters = {
                'email': username,
                'pass': password
            }
            console.log(bodyParameters)
            const response= signin.login(bodyParameters)
            console.log(response)
            // setToken(response.data.token);
            // setCookie('token', response.data.token, 7);
        } catch (error) {
            console.error(error);
        }
    }
    // function to handle user logout
    const handleLogout = () => {
        axios.get("http://localhost:8092/patient_end/api/v1/auth/logout");
    }
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={handleLogin}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                        <Grid item>
                            <Link to="/register" variant="body2">
                                {"Don't have an account? Register"}
                            </Link>
                        </Grid>
                </form>
            </div>
        </Container>
    );
};

export default Login;