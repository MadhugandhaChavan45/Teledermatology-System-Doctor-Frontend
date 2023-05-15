import CssBaseline from '@mui/material/CssBaseline';
import "./viewdiagnosis.css"
import Navbar from "../../components/navbar/Navbar";
import {Paper, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Modal, Table, TabPanel} from "@mui/joy";
import moment from "moment";
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Card, CardMedia} from '@material-ui/core';
import fetchimage from "../../services/Fetchimage";
import getpastdata from "../../services/Getpastdata";
import async from "async";
import {useLocation, useParams} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

export default function Viewdiagnosis(){
    const {pid}=useParams();
    console.log("Here Newrequest",pid);
    // const location= useLocation();
    // const {pid} = location.state;
    console.log("Here viewdiagnosis",pid)
    const [loading, setLoading] = useState(true);
    const [records, setRecords] = useState(null);
    const [token, setToken] = useState(null);
    const [open, setOpen] = useState(null);
    const classes = useStyles();
    const [blobUrl, setBlobUrl] = useState(null);
    const getCookie = (name) => {
        const cookieString = document.cookie;
        console.log(cookieString)
        if (cookieString.length > 0) {
            const cookieArray = cookieString.split(';');
            for (let i = 0; i < cookieArray.length; i++) {
                const cookie = cookieArray[i].trim();
                console.log(cookie)
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    return decodeURIComponent(cookie.substring(name.length + 1));
                }
            }
        }
        return null;
    }
    useEffect(() => {
        // check for the token in cookies when the component mounts
        const tokenFromCookie = getCookie('_xsrf');
        console.log("token here",token)
        if (tokenFromCookie) {
            setToken(tokenFromCookie);
        }
    }, []);
    const viewimage= async()=>{
            // const fetchBlob = async () => {
            //     const response = await fetch.fetchimage(aid); // Replace with your server URL
            //     const blob = await response.blob();
            //     const url = URL.createObjectURL(blob);
            //     setBlobUrl(url);
            // };
            // fetchBlob();
        };
        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };
    // useEffect(() => {
    //     const fetchBlob = async () => {
    //         const response = await fetch.fetchimage(aid); // Replace with your server URL
    //         const blob = await response.blob();
    //         const url = URL.createObjectURL(blob);
    //         setBlobUrl(url);
    //     };
    //     fetchBlob();
    // }, []);
    // const handleOpen = () => {
    //     setOpen(true);
    // };
    // const handleClose = () => {
    //     setOpen(false);
    // };
    useEffect(() => {
        console.log("HI")
        const fetchData = async () => {
            // {console.log(props.pid)}
            const data={
                'pid':pid,
                'aid':''
            }

            try {
                console.log(data)
                const response = await getpastdata.pastdata(data);
                console.log(response);
                let res=response.data;
                console.log(res)
                // for(let i=0;i<res.length;i++){
                //     res[i]['auto_id']=i;
                //     res['accordionOpen']=false;
                // }
                setRecords(res);
                console.log(records)
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    },[])
    return(
      <div>
          {/*<div>Hello</div>*/}
          <Navbar pid={pid}/>
          View
          {/*{console.log(records)}*/}
              {!loading && records.length==0?<>No past diagnosis Present</>:<></>}
              {!loading && records.length!==0?
                  ( <TableContainer component={Paper}>
                          <Table sx={{ minWidth: 550}} aria-label="simple table">
                              <TableHead sx={{ backgroundColor:"whitesmoke" }}>
                                  <TableRow>
                                      <TableCell align="left"
                                          // sx={{ fontWeight: 'bold' }}
                                      >APPOINTMENT ID</TableCell>
                                      <TableCell align="left"
                                          // sx={{ fontWeight: 'bold' }}
                                      >CREATE DATE</TableCell>
                                      <TableCell align="left"
                                          // sx={{ fontWeight: 'bold' }}
                                      >VIEW IMAGE</TableCell>
                                      <TableCell align="left"
                                          // sx={{ fontWeight: 'bold' }}
                                      >ML DIAGNOSIS</TableCell>
                                      <TableCell align="center"
                                          // sx={{ fontWeight: 'bold' }}
                                      >DOCTOR DIAGNOSIS</TableCell>
                                      <TableCell align="left"
                                          // sx={{ fontWeight: 'bold' }}
                                      >DOCTOR COMMENTS</TableCell>
                                      <TableCell align="left"
                                          // sx={{ fontWeight: 'bold' }}
                                      >PATIENT COMMENTS</TableCell>
                                      <TableCell align="left"
                                          // sx={{ fontWeight: 'bold' }}
                                      >STATUS</TableCell>
                                  </TableRow>
                              </TableHead>
                              <TableBody sx={{ backgroundColor:"white" }}>
                                  { !loading && records.map((row) => (
                                      <TableRow
                                          key={row.aid}
                                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                          <TableCell component="th" scope="row">
                                              {moment(row.createdate).format("MMMM D, YYYY")}
                                          </TableCell>
                                          <TableCell><button onClick={()=>viewimage()}>View Image</button></TableCell>
                                          <TableCell align="center">{row.mldiagnosis}</TableCell>
                                          <TableCell align="center">{row.docdiagnosis}</TableCell>
                                          <TableCell align="center">{row.dcomments}</TableCell>
                                          <TableCell align="center">{row.pcomments}</TableCell>
                                          <TableCell align="center">{row.status}</TableCell>
                                          {/*<TableCell component="th" scope="row">*/}
                                          {/*    {moment("11-02-1021").format("MMMM D, YYYY")}*/}
                                          {/*</TableCell>*/}
                                          {/*<TableCell component="th" scope="row">*/}
                                          {/*    {moment("11-02-1021").format("MMMM D, YYYY")}*/}
                                          {/*</TableCell>*/}
                                          {/*<TableCell align="left"><Button variant="contained" color="success" onClick = {() => {handleOpen()*/}
                                          {/*}}>View Image*/}
                                          {/*    <Modal*/}
                                          {/*        className={classes.modal}*/}
                                          {/*        open={open}*/}
                                          {/*        onClose={handleClose}*/}
                                          {/*    >*/}
                                          {/*        <div className={classes.paper}>*/}
                                          {/*            <CardMedia className={classes.media} image={blobUrl} />*/}
                                          {/*        </div>*/}
                                          {/*    </Modal></Button></TableCell>*/}
                                          {/*<TableCell align="center">{row.ml_diagnosis}</TableCell>*/}
                                          {/*<TableCell align="center">{row.doctor_diagnosis}</TableCell>*/}
                                          {/*<TableCell align="center">{row.p_comments}</TableCell>*/}
                                          {/*<TableCell align="center">{row.d_comments}</TableCell>*/}
                                          {/*<TableCell align="center">{row.status}</TableCell>*/}
                                          {/*<TableCell align="center">disease1</TableCell>*/}
                                          {/*<TableCell align="center">disease2</TableCell>*/}
                                          {/*<TableCell align="center">Nothing</TableCell>*/}
                                          {/*<TableCell align="center">not much</TableCell>*/}
                                          {/*<TableCell align="center">viewed</TableCell>*/}
                                      </TableRow>
                                  ))}
                              </TableBody>
                          </Table>
                      </TableContainer>
                  ):<></>}
      </div>
    );
};




//     <Card onClick={handleOpen}>
//         <CardMedia className={classes.media} image={blobUrl} />
//     </Card>
//
// </div>
// function BlobImage() {
//
//
//     useEffect(() => {
//         const fetchBlob = async () => {
//             const response = await fetch('http://example.com/image.jpg'); // Replace with your server URL
//             const blob = await response.blob();
//             const url = URL.createObjectURL(blob);
//             setBlobUrl(url);
//         };
//         fetchBlob();
//     }, []);
//
//     return (
//         <Card>
//             <CardMedia className={classes.media} image={blobUrl} />
//         </Card>
//     );
// }
// import React, {useEffect, useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
// import Navbar from "../../components/navbar/Navbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import getpastdata from "../../services/Getpastdata";

// const drawerWidth = 240;
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//     },
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//     },
// }));
//
// const Viewdiagnosis = () => {
//     const [loading, setLoading] = useState(true);
//     const [records, setRecords] = useState(null);
//     // const cred={
//     //     'pid':
//     //     'aid':
//     // }
//     useEffect(() => {
//         const fetchData = async () => {
//             // {console.log(props.pid)}
//             setLoading(true);
//             try {
//                 const response = await getpastdata.pastdata();
//                 console.log(response);
//                 let res=response.data;
//                 console.log(res)
//                 // for(let i=0;i<res.length;i++){
//                 //     res[i]['auto_id']=i;
//                 //     res['accordionOpen']=false;
//                 // }
//                 setRecords(res);
//             } catch (error) {
//                 console.log(error);
//             }
//             setLoading(false);
//         };
//         fetchData();
//     },[])
// //     const classes = useStyles();
// //     const [selectedIndex, setSelectedIndex] = useState(null);
// //     const handleListItemClick = (index) => {
// //         setSelectedIndex(index);
// //     };
// //
// //     const items = [
// //         {
// //             id: 1,
// //             title: 'Item 1',
// //             content: 'This is the content for Item 1.',
// //         },
// //         {
// //             id: 2,
// //             title: 'Item 2',
// //             content: 'This is the content for Item 2.',
// //         },
// //         {
// //             id: 3,
// //             title: 'Item 3',
// //             content: 'This is the content for Item 3.',
// //         },
// //     ];
//
//     return (
//         <div>
//         <Navbar/>
//             <div><Sidebar/></div>
//
//         {/*<div className={classes.root}>*/}
//         {/*    <Drawer*/}
//         {/*        className={classes.drawer}*/}
//         {/*        variant="permanent"*/}
//         {/*        classes={{*/}
//         {/*            paper: classes.drawerPaper,*/}
//         {/*        }}*/}
//         {/*    >*/}
//         {/*        <List>*/}
//         {/*            {items.map((item, index) => (*/}
//         {/*                <ListItem*/}
//         {/*                    button*/}
//         {/*                    key={item.id}*/}
//         {/*                    selected={selectedIndex === index}*/}
//         {/*                    onClick={() => handleListItemClick(index)}*/}
//         {/*                >*/}
//         {/*                    <ListItemText primary={item.title} />*/}
//         {/*                </ListItem>*/}
//         {/*            ))}*/}
//         {/*        </List>*/}
//         {/*    </Drawer>*/}
//         {/*    <main className={classes.content}>*/}
//         {/*        {selectedIndex !== null && (*/}
//         {/*            <div>*/}
//         {/*                <h2>{items[selectedIndex].title}</h2>*/}
//         {/*                <p>{items[selectedIndex].content}</p>*/}
//         {/*            </div>*/}
//         {/*        )}*/}
//         {/*    </main>*/}
//         {/*</div>*/}
//         </div>
//     )
// };
//
// export default Viewdiagnosis;
