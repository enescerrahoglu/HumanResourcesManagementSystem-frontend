import axios from "axios"

export default class CvTechnologyService {
    getCvTechnologies() {
        return axios.get("http://localhost:8080/api/cvTechnologies/getAll")
    }
    getCvTechnologiesByCvId(cvId) {
        return axios.get("http://localhost:8080/api/cvTechnologies/getCvTechnologyWithTechnologydetails?cvId=" + cvId)

    }
}