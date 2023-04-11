async function GetUserService()
{
    return await JSON.parse(localStorage.getItem('User'));
}

export default GetUserService