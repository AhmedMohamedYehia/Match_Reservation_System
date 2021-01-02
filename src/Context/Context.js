import React, {createContext, Component} from 'react'
import axios from 'axios'

export const ProfileContext= createContext();
class ContextProvider extends Component {
    state={
        user: {
            displayName: "",
            displayPicture: "",
            isPrivate: "",
            user: "",
            userName: "",
            picture:"",
            _id:""
        },
        status:""
    }
    componentDidMount =()=>{   
        // axios.get(baseURL+'/user/myProfile',{withCredentials: true, credentials: 'include'})
        // .then(res => {
        //     console.log("response el /myprofile",res)
        //     if(res.status===200)
        //     {
        //         this.setState({status:"connected"}) 
        //         setStatus("connected");
        //         this.setState({user: res.data})
        //         console.log("state",this.state)

        //     }else{
        //         this.setState({status:"not connected"}) 
        //         setStatus("not connected");
        //         const msg=responseHandler(res);
        //         console.log(msg)
        //     }        
        //     }).catch(async (err) => {
        //          const msg=await responseHandler(err);
        //         if(msg==="token refreshed"){
        //             console.log("refreshed")
        //             this.componentDidMount()
        //         }
        //         else if (msg==="logout"){
        //             console.log("not refreshed")
        //             this.setState({status:"not connected"}) 
        //         }   
        //     })

          
    }
    render(){
        return(

            <ContextProvider.Provider value={{...this.state}}>
                {this.props.children}
            </ContextProvider.Provider>
        ); 
        
    }

}

export default ContextProvider;