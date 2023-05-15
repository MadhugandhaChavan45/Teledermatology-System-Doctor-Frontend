import axios from "axios";
axios.defaults.withCredentials = true
class Signin {

    login(credentials) {
        console.log(credentials)
        const res= axios.post("http://localhost:8092/patient_end/api/v1/auth/authenticate",
            credentials,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Credentials':'true'
                }
            }
            );
        console.log(res)
        return res
    }
}

const signin =new Signin()
export default signin ;