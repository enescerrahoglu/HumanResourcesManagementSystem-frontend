import axios from "axios"

export default class CvForeignLanguageService {
    getCvForeignLanguages() {
        return axios.get("http://localhost:8080/api/cvForeignLanguages/getAll")
    }
    getCvForeignLanguagesByCvId(cvId) {
        return axios.get("http://localhost:8080/api/cvForeignLanguages/getCvForeignLanguageWithForeignLanguageDetails?cvId=" + cvId)
    }
}