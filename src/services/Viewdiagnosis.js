import axios from "axios";

class Viewdiagnosis {
    ViewPrevDiagnosis(credentials,token) {
        const config = {
            headers: { Authorization: `Bearer ${token}` ,'Access-Control-Allow-Origin': '*'}
        }
        return axios.get("/signin",credentials,config);
    }
}

const viewdiagnosis =new Viewdiagnosis()
export default viewdiagnosis ;