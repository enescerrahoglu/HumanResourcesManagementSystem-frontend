import axios from "axios"

export default class SocialMediaService {
    getSocialMedia() {
        return axios.get("http://localhost:8080/api/socialMedia/getAll")
    }
}