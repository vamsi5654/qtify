import axios from "axios";

export const fetchFilters = async () => {
  try {
    const response = await axios.get("https://qtify-backend-labs.crio.do/genres");
    return response.data;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
};
export const fetchTopAlbums = async () => {
    const response = await fetch("https://qtify-backend-labs.crio.do/albums/top");
    return response.json();
};

export const fetchNewAlbums = async () => {
    const response = await fetch("https://qtify-backend-labs.crio.do/albums/new");
    return response.json();
};

export const fetchSongs = async () => {
    const response = await fetch("https://qtify-backend-labs.crio.do/songs");
    return response.json();
};

export const fetchGenres = async () => {
    const response = await fetch("https://qtify-backend-labs.crio.do/genres");
    return response.json();
};
