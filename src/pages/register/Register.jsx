import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(2),
    },
    textField: {
        margin: theme.spacing(1),
        width: '25ch',
    },
    button: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export default function Register() {
    const classes = useStyles();
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [email, setEmail] = useState('');
    const [pid, setPid] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);
    const getCookie = (name) => {
        const cookieString = document.cookie;
        if (cookieString.length > 0) {
            const cookieArray = cookieString.split(';');
            for (let i = 0; i < cookieArray.length; i++) {
                const cookie = cookieArray[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    return decodeURIComponent(cookie.substring(name.length + 1));
                }
            }
        }
        return null;
    }
    useEffect(() => {
        // check for the token in cookies when the component mounts
        const tokenFromCookie = getCookie('token');
        if (tokenFromCookie) {
            setToken(tokenFromCookie);
        }
    }, []);
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`Email: ${email}\nPassword: ${password}`);
        const data={
            'pid':pid,
            'aadhar':aadhar,
            'fname':fname,
            'lname':lname,
            'Email':email,
            'Pass':password,
            'role':''
        }
        console.log(data)
        await axios.post('http://localhost:8092/patient_end/api/v1/auth/register', data)
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
                className={classes.textField}
                label="Patient ID"
                value={pid}
                onChange={(event) => setPid(event.target.value)}
            />
            <TextField
                className={classes.textField}
                label="First Name"
                value={fname}
                onChange={(event) => setFname(event.target.value)}
            />
            <TextField
                className={classes.textField}
                label="Last Name"
                value={lname}
                onChange={(event) => setLname(event.target.value)}
            />
            <TextField
                className={classes.textField}
                label="Email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
                className={classes.textField}
                label="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <TextField
                className={classes.textField}
                label="Aadhar"
                value={aadhar}
                onChange={(event) => setAadhar(event.target.value)}
            />
            <Button onClick={()=>{handleSubmit()}}
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
            >
                Register
            </Button>
        </form>
    );
}
