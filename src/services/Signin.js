import axios from "axios";

class Signin {
    login(credentials,token) {
        const config = {
            headers: { Authorization: `Bearer ${token}` ,'Access-Control-Allow-Origin': '*'}
        }
        return axios.post("/signin",credentials,config);
    }
}

const signin =new Signin()
export default signin ;