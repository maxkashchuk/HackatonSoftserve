import axios from "axios";

export default async function CardTeacherService (body)
{
    return await axios.post('api/user/ratingcount', body);
}