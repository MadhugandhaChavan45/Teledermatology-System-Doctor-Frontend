import axios from "axios";
axios.defaults.withCredentials = true
class Register {
    register_patient(data) {
        console.log(data)
        return axios.post("http://localhost:8092/patient_end/api/v1/auth/register",data,
            {withCredentials: true,
                headers: {
                    'Content-Type': 'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Credentials':'true'
                    //             'Cookie': 'cookieName=${token}',
                }}
        );

    }
}
const register =new Register()
export default register ;