import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignInService = (body) =>
{
        return axios.post('api/user/signin', body);
}

export default SignInService


// export default class SignInService
// {
    
//     // static async logoutser(body)
//     // {
//     //     localStorage.removeItem('isLogged');
//     //     localStorage.removeItem('User');

//     //     // return await axios({
//     //     //     method: 'post',
//     //     //     url: 'api/user/signup',
//     //     //     data: JSON.stringify(body)
//     //     // }).then(res => {
//     //     //     console.log(res.data)
//     //     //     localStorage.setItem('isLogged', true);
//     //     //     localStorage.setItem('User', res.data);
//     //     // });
//     // }
// }