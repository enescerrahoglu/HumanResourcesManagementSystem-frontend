import axios from "axios"

export default class UniversityDepartmentService {
    getUniversityDepartments() {
        return axios.get("http://localhost:8080/api/universityDepartments/getAll")
    }
}