import axios from 'axios'

const TRAINEE_API_BASE_URL = "http://localhost:8056/api/v1/trainee";

class TraineeService{

    getTrainee(){
        return axios.get(TRAINEE_API_BASE_URL);
    }
}

export default new TraineeService()