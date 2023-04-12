import axios from "axios";

async function SubjectHomeService() {
  return await axios.get("api/subject/subjectsget");
}

export default SubjectHomeService;