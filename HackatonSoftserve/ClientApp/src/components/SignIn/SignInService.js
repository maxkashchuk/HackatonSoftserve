import axios from "axios";

const SignInService = (body) =>
{
        return axios.post('api/user/signin', body);
}

export default SignInService