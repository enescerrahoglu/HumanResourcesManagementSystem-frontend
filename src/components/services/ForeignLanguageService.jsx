import axios from "axios"

export default class ForeignLanguageService {
    getForeignLanguages() {
        return axios.get("/api/foreignLanguages/getAll")
    }
}