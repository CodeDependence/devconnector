import axios from "axios";
import { GET_ERRORS } from './types';


// Register
export const registerUser = (userData, history) => dispatch => {
    axios
    .post("/api/users/registration", userData)
    .then(res => history.push('/login'))
    .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    )
};