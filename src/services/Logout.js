import axios from "axios";

class Logout {
    signout() {
        //
        // const config = {
        //     headers: { Authorization: `Bearer ${token}` ,'Access-Control-Allow-Origin': '*'}
        // }
        return axios.post("http://localhost:8092/patient_end/api/v1/auth/logout");
    }
}


const logout =new Logout()
export default logout ;