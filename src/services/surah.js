import { axiosInstance } from "./config/axios";

export const getSurah = async () => {
    const response = await axiosInstance.get(`/surah`).then((res) => res.data);
    return response;
};
