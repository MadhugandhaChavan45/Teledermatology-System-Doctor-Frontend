import axios from "axios";

class Createrequest {
    createnewrequest(body) {
        console.log(body)
        // const config = {
        //     headers: {Authorization: `Bearer ${token}`, 'Access-Control-Allow-Origin': '*'}
        // }
        return axios.post("http://localhost:8092/patient_end/api/v1/patient/create-appointment", body);
    }
}
const createrequest =new Createrequest()
export default createrequest ;