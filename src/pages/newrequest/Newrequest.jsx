import CssBaseline from '@mui/material/CssBaseline';
import "./newrequest.css"
import Navbar from "../../components/navbar/Navbar";
import {TextField} from "@material-ui/core";
import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {deprecate} from "@testing-library/jest-dom/dist/utils";
import axios from "axios";
import {toast} from "react-toastify";
import newrequest from "../../services/Uploadimage";
import upload from "../../services/Uploadimage";
import createrequest from "../../services/Createrequest";
import {useLocation, useParams} from "react-router-dom";
import moment from "moment";
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Newrequest(props){
    // const location= useLocation();
    const {pid}=useParams();
    console.log("Here Newrequest",pid);
    // console.log("Inside new request",location.state)
    // const {pid} = location.state;
    const [selectedFile, setSelectedFile] = useState(null);
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [pcomments,setPcomments] = useState({});
    var today = moment();
    // const [aid,setAid] = useState(null);
    const data={}
    const handleNameChange =(e)=>{
        setName(e.target.value);
        console.log(name)
    }
    const handleFileChange = (e) => {
        console.log(e.target.files[0])
        console.log(image)
        setImage(e.target.files[0])
        console.log(image)
    };
    const handleCreate = ()=>{
        console.log("Inside handlecreate",pid)
        const data = {
            "pid":pid,
            "aid":"",
            "createdate":today,
            "mldiagnosis":"",
            "docdiagnosis":"",
            "pcomments":pcomments,
            "dcomments":"",
            "status":"Pending"
        }
        console.log("Inside handlecreate",data)
        createrequest.createnewrequest(data)
            .then((response) => {
                if (response.status === 200) {
                    toast.success("Successfully created request!!", {
                        position: "bottom-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                }


            })
            .catch((error) => {
                console.log(error)
                toast.error("Error creating request!!", {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })

            });
    }
    const handleFileUpload = (e) => {
        try {
            // console.log(image)
            // console.log(e.target.files[0])
            // e.preventDefault();
            // console.log(image)
            const formData = new FormData();
            console.log(image)
            formData.append('image', image)
            console.log("H",formData)
            console.log("H",formData.getAll("image"))
            upload.uploadimage(formData)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response)
                        toast.success("File uploaded successfully")
                        console.log("response here"+response)
                    }
                })
            // window.location.reload(true)
            console.log('File uploaded successfully.');
        }
        catch (error) {
            console.error('Error uploading file:', error);
        }
        // setImage(null)
        // setName(null)
    };
    return(
        <div>
            <Navbar/><br/><br/><br/>
            Upload an image to create a new request for diagnosis
            <br/><br/>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} /><br/><br/>
                </div>
                <div>
                    <label htmlFor="name">Image:</label>
                    <input type="file"
                           id="image"
                           accept=".jpeg,.png,.jpg"
                           onChange={handleFileChange} />
                    <div> <br/><button onClick={()=>{handleFileUpload()}}>Upload Image</button></div>

                </div>
                <div>
                    <br/>
                    Enter your comments: <br/>
                    <TextField
                        required
                        label="Patient Comments"
                        id="pcomments"
                        name="pcomments"
                        // value={pcomments}
                        onChange={(e) => setPcomments(e.target.value)}
                        autoComplete="new-presc"
                    />
                    {console.log(pcomments)}
                </div>
                <div>
                    {/*{()=>{handleSubmit()}}*/}
                    {/*{console.log(data)}*/}
                    <button onClick={()=>{handleCreate()}}>Create Request</button>
                </div>
            </form>
        </div>
    );
};


