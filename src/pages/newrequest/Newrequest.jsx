import CssBaseline from '@mui/material/CssBaseline';
import "./newrequest.css"
import Navbar from "../../components/navbar/Navbar";
import {TextField} from "@material-ui/core";
import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {deprecate} from "@testing-library/jest-dom/dist/utils";
import axios from "axios";
import {toast} from "react-toastify";
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Newrequest(){
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
        console.log(event.target.files[0])
        setSelectedFile(event.target.files[0]);
    };
    const handleFileUpload = async () => {
        try {
            console.log(selectedFile)
            const formData = new FormData();
            formData.append('file', selectedFile);
            console.log(formData)
            await axios.post('/api/upload', formData)
                .then((response) => {
                    if (response.status === 200) {
                        toast.success("File uploaded successfully")
                        // action={
                        //     "action":" ",
                        // }
                        console.log("response here"+response)
                    }
                })
            // window.location.reload(true)
            console.log('File uploaded successfully.');
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    // const classes = useStyles();
    // const [image, setImage] = useState('');
    // function handleImageUpload(event) {
    //     const file = event.target.files[0];
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         const dataUrl = reader.result;
    //         localStorage.setItem('userImage', dataUrl);
    //         setImage(dataUrl);
    //     };
    //     reader.readAsDataURL(file);
    // };

    return(
        <div>
            <Navbar/><br/><br/><br/>
            Upload an image to create a new request for diagnosis
            <br/><br/>
            {/*<div className={classes.root}>*/}
            {/*    <TextField*/}
            {/*        type="file"*/}
            {/*        accept=".jpeg,.png,.jpg"*/}
            {/*        onChange={handleImageUpload}*/}
            {/*    />*/}
            {/*    <br/><br/>*/}
            {/*    {image && <img src={image} alt="user uploaded image" />}*/}
            {/*</div>*/}
            <form>
                <div>
                    <input type="file"
                           accept=".jpeg,.png,.jpg"
                           onChange={handleFileChange} />
                    <button onClick={handleFileUpload}>Upload</button>
                </div>
            </form>
        </div>
    );
};
