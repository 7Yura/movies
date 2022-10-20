import axios from "axios";

import {baseURL} from "../constats";

const axiosService = axios.create({baseURL})

export {
    axiosService
}