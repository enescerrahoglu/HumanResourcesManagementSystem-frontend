import axios from "axios"

export default class CvService {
    getCvs() {
        return axios.get("http://localhost:8080/api/cvs/getAll")
    }
    getCvsByCvId(cvId) {
        return axios.get("http://localhost:8080/api/cvs/getCvWithJobSeekerDetails?cvId=" + cvId)
    }
}