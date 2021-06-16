import axios from "axios"

export default class CvSocialMediaService {
    getCvSocialMedia() {
        return axios.get("http://localhost:8080/api/cvSocialMedia/getAll")
    }
    getCvSocialMediaByCvId(cvId) {
        return axios.get("http://localhost:8080/api/cvSocialMedia/getCvSocialMediaWithSocialMediaDetails?cvId=" + cvId)

    }
}