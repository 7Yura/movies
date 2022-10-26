// import axios from "axios";
//
// import {baseURL} from "../constats";
//
// const axiosService = axios.create({baseURL})
//
// export {
//     axiosService
// }
import axios from "axios";

import {baseURL} from "../constats";
import {token} from "../token/token";



const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${token}`
    }
});


export {
    axiosService
}
