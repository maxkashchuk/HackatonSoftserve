import axios from "axios";

export default async function AddSubjectService (body)
{
    return await axios.post('api/subject/addsubject', body);
}