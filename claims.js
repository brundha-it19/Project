import axios from "axios"

export default
{
    getProducts({success, failure})     
    {
        axios.get(`https://769b-103-224-35-103.ap.ngrok.io/claim/api/getAllClaims`)   
        .then(
            (data)=>           
            {      
                success(data)                                               
            }      
        )
        .catch((error) => {
            failure(error)
        }                
            )
    }   
}