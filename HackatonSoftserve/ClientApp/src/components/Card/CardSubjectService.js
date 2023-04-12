import axios from "axios";

export default async function CardSubjectService (body)
{
    return await axios.post('api/subject/ratingcount', body);
}