import axios from "axios";

class Getpastdata {
    pastdata(body,token) {
        console.log(body)
        // const config = {
        //     headers: {Authorization: `Bearer ${token}`, 'Access-Control-Allow-Origin': '*'}
        // }
        // console.log('token='+ token)
        return axios.get("http://localhost:8092/patient_end/api/v1/patient/past-appointments", body,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    // 'Cookie': 'token='+ token
                }
            });
    }
}
const getpastdata =new Getpastdata()
export default getpastdata ;