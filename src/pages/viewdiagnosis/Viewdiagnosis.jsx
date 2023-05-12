import CssBaseline from '@mui/material/CssBaseline';
import "./viewdiagnosis.css"
import Navbar from "../../components/navbar/Navbar";
import {Paper, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Table, TabPanel} from "@mui/joy";
import moment from "moment";
import {useState} from "react";

export default function Viewdiagnosis(){
    const [loading, setLoading] = useState(true);
    const [records, setRecords] = useState(true);
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
                                      >ML DIAGNOSIS</TableCell>
                                      <TableCell align="center"
                                          // sx={{ fontWeight: 'bold' }}
                                      >DOCTOR DIAGNOSIS</TableCell>
                                      <TableCell align="left"
                                          // sx={{ fontWeight: 'bold' }}
                                      >PATIENT COMMENTS</TableCell>
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

