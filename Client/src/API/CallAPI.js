import axios from "../../node_modules/axios";

export const CallAPI=async(query={},token)=>{
   const result = await axios.post("/graphql",JSON.stringify(query),{
            headers:{
                "Content-Type":"application/json",
                "Authorization": token
            }
     });
     return result;
}