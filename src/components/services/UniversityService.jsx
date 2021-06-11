import axios from "axios"

export default class UniversityService {
    getUniversities() {
        return axios.get("/api/universities/getAll")
    }
}