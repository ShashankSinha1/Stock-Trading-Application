import axios from "axios";

const KEY = "cj7jed1r01qnc6363ukgcj7jed1r01qnc6363ul0"

export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token: KEY
    }
})