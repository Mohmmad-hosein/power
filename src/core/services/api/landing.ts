import axios from "axios";
export const GetLandingApi = async () => {
    try {
      const response = await axios.get<any>("https://classapi.sepehracademy.ir/api/Home/LandingReport");
      console.log(response)
      return response.data; 
    } catch (error) {
      console.log(error, "error");
      return []; 
    }
  };
  