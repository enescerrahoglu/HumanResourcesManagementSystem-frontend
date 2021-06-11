import axios from "axios"

export default class SystemPersonnelService {

    getSystemPersonnels() {
        return axios.get("/api/systemPersonnel/getAll")

    }

}