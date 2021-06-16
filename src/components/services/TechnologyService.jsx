import axios from "axios"

export default class TechnologyService {
    
    getTechnology() {
        return axios.get("http://localhost:8080/api/technologies/getAll")
    }
    add(technology){
        return axios.post("http://localhost:8080/api/technologies/add", technology)
    }
}