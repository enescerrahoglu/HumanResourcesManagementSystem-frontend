import axios from "axios"

export default class ForeignLanguageService {
    
    getForeignLanguages() {
        return axios.get("http://localhost:8080/api/foreignLanguages/getAll")
    }
}