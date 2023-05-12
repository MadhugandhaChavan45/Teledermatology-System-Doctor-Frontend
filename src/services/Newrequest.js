import axios from "axios";

class Newrequest {
    createnewrequest(request,token) {
        const config = {
            headers: { Authorization: `Bearer ${token}` ,'Access-Control-Allow-Origin': '*'}
        }
        return axios.post("/createnewrequest",request,config);
    }
}

const newrequest =new Newrequest()
export default newrequest ;