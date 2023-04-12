import axios from "axios";

export default function SignUpServiceTeacher (body)
{
    return axios.post('api/user/signupteacher', body);
}