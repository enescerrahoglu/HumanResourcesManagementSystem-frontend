import axios from "axios"

export default class TechnologyService {
    getTechnology() {
        return axios.get("/api/technologies/getAll")
    }
}