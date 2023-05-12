import CssBaseline from '@mui/material/CssBaseline';
import "./newrequest.css"
import Navbar from "../../components/navbar/Navbar";
import {TextField} from "@material-ui/core";
import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
export default function Newrequest(){
    const classes = useStyles();
    const [image, setImage] = useState('');
    function handleImageUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const dataUrl = reader.result;
            localStorage.setItem('userImage', dataUrl);
            setImage(dataUrl);
        };
        reader.readAsDataURL(file);
    };
    return(
        <div>
            <Navbar/><br/><br/><br/>
            Upload an image to create a new request for diagnosis
            <br/><br/>
            <div className={classes.root}>
                <TextField
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                />
                <br/><br/>
                {image && <img src={image} alt="user uploaded image" />}
            </div>
        </div>
    );
};
