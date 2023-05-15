import axios from "axios";

class Fetchimage {
    fetchimage(aid,token) {
        const config = {
            headers: { Authorization: `Bearer ${token}` ,'Access-Control-Allow-Origin': '*'}
        }
        return axios.get("/http://localhost:8092/patient_end/api/v1/patient/view-image"+"/"+aid,config);
    }
}

const fetch =new Fetchimage()
export default fetch ;