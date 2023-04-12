import axios from "axios";

export default function SignUpServiceStudent (body)
{
    return axios.post('api/user/signupstudent', body);
}