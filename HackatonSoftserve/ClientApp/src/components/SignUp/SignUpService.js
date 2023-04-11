import axios from "axios";

const SignUpService = (body) =>
{
    return axios.post('api/user/signup', body);
}

export default SignUpService