import axios from "axios";
axios.defaults.withCredentials = true
class Signin {

    login(credentials) {
        // const config = {
        //     headers: {'Access-Control-Allow-Origin':'*'}
        // };
        // config.headers["Access-Control-Allow-Origin"]='*';
        // config.headers['Access-Control-Allow-Credentials']= 'true';
        // config.headers['Access-Control-Allow-Methods']=["POST"];
        // config.headers['Content-Type']='application/json';
        console.log(credentials)
        return axios.post("http://localhost:8092/patient_end/api/v1/auth/authenticate",{credentials}, {
            withCredentials: true,
            headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
            }});

    }
}

const signin =new Signin()
export default signin ;