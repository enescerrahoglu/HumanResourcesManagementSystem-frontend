import axios from "axios"

export default class WorkExperienceService {
    getWorkExperiences() {
        return axios.get("/api/workExperiences/getAll")
    }
}