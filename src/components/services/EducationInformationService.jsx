import axios from "axios"

export default class EducationInformationService {
    getEducationInformations() {
        return axios.get("http://localhost:8080/api/educationInformations/getAll")
    }
    getEducationInformationsByCvId(cvId) {
        return axios.get("http://localhost:8080/api/educationInformations/getEducationInformationWithCvWithUniversityWithUniversityDepartmentDetails?cvId=" + cvId)
    }
}