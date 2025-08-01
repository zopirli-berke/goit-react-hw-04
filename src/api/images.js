import axios from "axios";

const API_URL = "https://api.unsplash.com/photos";
const API_KEY = "Z5xm-39WzWSlxTvC1yg9uRaw9OTVoaO8Md9chnl-lGQ";

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(API_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });
  return response.data;
};
