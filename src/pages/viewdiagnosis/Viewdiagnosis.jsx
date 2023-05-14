import CssBaseline from '@mui/material/CssBaseline';
import "./viewdiagnosis.css"
import Navbar from "../../components/navbar/Navbar";
import {Paper, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Modal, Table, TabPanel} from "@mui/joy";
import moment from "moment";
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Card, CardMedia} from '@material-ui/core';
import fetchimage from "../../services/fetchimage";
const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

export default function Viewdiagnosis(){

    const [loading, setLoading] = useState(true);
    const [records, setRecords] = useState(true);
    const classes = useStyles();
    const [blobUrl, setBlobUrl] = useState(null);
    useEffect(() => {
        const fetchBlob = async () => {
            const response = await fetch.fetchimage(aid); // Replace with your server URL
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setBlobUrl(url);
        };
        fetchBlob();
    }, []);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return(
      <div>
          <Navbar/>
          View
          <TabPanel value={0} sx={{ p: 2 }}>
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
                                          key={row.aId}
                                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                          {/*<TableCell align="center">{row.aId}</TableCell>*/}
                                          <TableCell align="center">{row.aId}</TableCell>
                                          {/*<TableCell component="th" scope="row">*/}
                                          {/*    {moment(row.create_date).format("MMMM D, YYYY")}*/}
                                          {/*</TableCell>*/}
                                          <TableCell component="th" scope="row">
                                              {moment("11-02-1021").format("MMMM D, YYYY")}
                                          </TableCell>
                                          <TableCell component="th" scope="row">
                                              {moment("11-02-1021").format("MMMM D, YYYY")}
                                          </TableCell>
                                          <TableCell align="left"><Button variant="contained" color="success" onClick = {() => {handleOpen()
                                          }}>View Image
                                              <Modal
                                                  className={classes.modal}
                                                  open={open}
                                                  onClose={handleClose}
                                              >
                                                  <div className={classes.paper}>
                                                      <CardMedia className={classes.media} image={blobUrl} />
                                                  </div>
                                              </Modal></Button></TableCell>
                                          {/*<TableCell align="center">{row.ml_diagnosis}</TableCell>*/}
                                          {/*<TableCell align="center">{row.doctor_diagnosis}</TableCell>*/}
                                          {/*<TableCell align="center">{row.p_comments}</TableCell>*/}
                                          {/*<TableCell align="center">{row.d_comments}</TableCell>*/}
                                          {/*<TableCell align="center">{row.status}</TableCell>*/}
                                          <TableCell align="center">disease1</TableCell>
                                          <TableCell align="center">disease2</TableCell>
                                          <TableCell align="center">Nothing</TableCell>
                                          <TableCell align="center">not much</TableCell>
                                          <TableCell align="center">viewed</TableCell>
                                      </TableRow>
                                  ))}
                              </TableBody>
                          </Table>
                      </TableContainer>
                  ):<></>}
          </TabPanel>
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