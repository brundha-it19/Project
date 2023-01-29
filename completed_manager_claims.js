
import axios from "axios"

export default
{
    completed_man({success, failure})     
    {
        axios.get(`https://769b-103-224-35-103.ap.ngrok.io/claim/api/getClaimsByEmployeeId/46?status=APPROVED&role=MANAGER`)   
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

