import axios from "axios"

export default class JobAdvertisementService {
    
    getJobAdvertisements() {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAll")
    }
    getJobAdvertisementByJobAdvertisementId(jobAdvertisementId) {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByJobAdvertisementId?id=" + jobAdvertisementId)
    }
    addJobAdvertisement(jobAdvertisement){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add", jobAdvertisement)
    }
}