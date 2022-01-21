import axios from "axios";

export default axios.create(
    { 
        baseURL : "https://cake-store-api.vercel.app/"
    }
  )