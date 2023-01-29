import axios from "axios"

export default
{
    completed({success, failure})     
    {
        axios.get(`https://769b-103-224-35-103.ap.ngrok.io/claim/api/getClaimsByEmployeeId/50?status=APPROVED&role=EMPLOYEE`)   
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