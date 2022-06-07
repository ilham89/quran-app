import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL || "https://api.quran.sutanlab.id/",
});

axiosInstance.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {
            ...config.headers,
        },
    };
});

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    // Error Handling
    function (error) {
        return Promise.reject(error);
    }
);
