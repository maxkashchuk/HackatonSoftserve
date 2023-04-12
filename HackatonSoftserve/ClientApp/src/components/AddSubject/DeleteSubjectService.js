import axios from "axios";

export default async function DeleteSubjectService (name)
{
    return await axios.post('api/subject/delsubject', name);
}