import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.carbonintensity.org.uk/",
});

export default instance;
