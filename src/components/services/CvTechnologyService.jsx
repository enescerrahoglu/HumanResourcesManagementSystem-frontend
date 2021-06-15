import axios from "axios"

export default class CvTechnologyService {
    getCvTechnologies() {
        return axios.get("http://localhost:8080/api/cvTechnologies/getAll")
    }
}