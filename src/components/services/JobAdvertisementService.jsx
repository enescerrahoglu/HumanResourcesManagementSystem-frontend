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
    closeTheJobAdvertisement(employerId, jobAdvertisementId, status){
        return axios.post("/api/jobAdvertisement/closeTheJobAdvertisement?employerId=" + employerId + "&jobAdvertisementId=" + jobAdvertisementId + "&status=" + status)
    }
    getJobAdvertisementForEmployerId(employerId){
        return axios.get("/api/jobAdvertisement/getByEmployerJobAdvertisements?userId=" + employerId)
    }
}