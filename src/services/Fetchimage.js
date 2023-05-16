import axios from "axios";

class Fetchimage {
    fetchimage(aid) {
        console.log("inisde fetchimage",aid)
        // const config = {
        //     headers: { Authorization: `Bearer ${token}` ,'Access-Control-Allow-Origin': '*'}
        // }
        let res= axios.get("http://localhost:8092/patient_end/api/v1/patient/view-image?aid="+aid,{ responseType: 'blob' });
        console.log("After fetchimage api")
        return res;
    }
}

const fetch =new Fetchimage()
export default fetch ;