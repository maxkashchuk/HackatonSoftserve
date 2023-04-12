import axios from "axios";

export default async function AdminPanelServiceDelete (email)
{
    return await axios.post('api/admin/deladmin', email);
}