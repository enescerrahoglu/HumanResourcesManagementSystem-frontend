import axios from "axios"

export default class WorkExperienceService {
    
    getWorkExperiences() {
        return axios.get("http://localhost:8080/api/workExperiences/getAll")
    }
    getWorkExperiencesByCvId(cvId) {
        return axios.get("http://localhost:8080/api/workExperiences/getWorkExperienceWithCvWithJobPositionDetails?cvId=" + cvId)
    }
}