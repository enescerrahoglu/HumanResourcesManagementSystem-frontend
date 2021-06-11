import axios from "axios"

export default class EducationInformationService {
    getEducationInformations() {
        return axios.get("/api/educationInformations/getAll")
    }
}