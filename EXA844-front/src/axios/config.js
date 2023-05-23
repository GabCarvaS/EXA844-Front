import axios from "axios";

const blogFetch = axios.create({
  baseURL: "https://exa844-project.onrender.com/cars",
  headers: {
    "Content-Type": "application/json",
  },
});

export default blogFetch;
