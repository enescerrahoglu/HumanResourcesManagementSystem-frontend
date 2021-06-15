import axios from "axios"

export default class SystemPersonnelService {

    getSystemPersonnels() {
        return axios.get("http://localhost:8080/api/systemPersonnel/getAll")

    }

}