import axios from "axios";

export default async function AdminPanelService (body)
{
    return await axios.post('api/admin/signupadmin', body);
}