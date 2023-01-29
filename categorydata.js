export default                  
{ 
    state:{
        category_data: {}                            
    },
    mutations:{
        setcatdata(state,catdata)     
        {
            state.employee_data=catdata;                   
        } 
    },
    actions:{
    },
    getters:{
        retrieve(state)
        {
            console.log(state.category_data)
            return state.category_data
        }
    },
    namespaced:true
}