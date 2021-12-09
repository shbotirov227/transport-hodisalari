import axios from "axios";

const instance = axios.create({
    baseURL: "https://api-dtp.yhxbb.uz/api/egov/",
});

export default instance;