import axios from "axios"

export default class CvTechnologyService {
    getCvTechnologies() {
        return axios.get("/api/cvTechnologies/getAll")
    }
}