import axios from "axios";

async function HomeService() {
  return await axios.get("api/user/teachersget");
}

export default HomeService;
