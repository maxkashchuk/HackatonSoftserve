const LoggedInService = () =>
{
    const logged = JSON.parse(localStorage.getItem('isLogged'));
    if(logged === true)
    {
      return true;
    }
    else
    {
      return false;      
    }
}

export default LoggedInService