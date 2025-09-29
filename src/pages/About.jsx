import axios from "axios";
import { useEffect } from "react";

export default function About() {
useEffect(()=>{
    async function ShowData() {
    try {

   const api=   import.meta.env.VITE_API_URL
   console.log(api)

      const responce = await axios.get(
       `${api}`
      );
      const userData = responce.data;
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  }
  ShowData();
  
},[])

  return <></>;
}
