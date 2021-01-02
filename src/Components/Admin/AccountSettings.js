/*import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import AccountOverview from './AccountOverview';
import AccountHeading from './AccountHeading';
import axios from 'axios'
import './Profile.css';
import { ConfigContext } from '../../Context/ConfigContext'
import { responseHandler } from '../../ReduxStore/Shared';

class AccountSettings extends Component {

    static contextType=ConfigContext;
    constructor(){
        super()
        this.state = {
         
            user:{
                dateOfBirth:"",
                email:"",
                image:"",
            },
        }
    }
  
    componentDidMount(){
        window.scrollTo(0, 0);
        axios.get(this.context.baseURL+"/me", {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
        })
            .then(res => {
                console.log(res)
                if(res.status===200)
                {
                    this.setState(prevState => (
                        {
                        user: {                   
                            ...prevState.user,    
                            dateOfBirth: res.data.dateOfBirth,
                            email: res.data.email,
                            image: res.data.images    
                        }
                    }))
                    console.log(localStorage)
                }else
                responseHandler(res);
            })
    }

    render()
    {
        {document.title ="Account overview - Spotify"}

        return(
            <div className="bg-dark-clr">

                <AccountHeading />
                <div className="container settings">
                    <div className="row">
                        <SideBar img={this.state.user.image}/>
                        <AccountOverview info={this.state.user}/>
                    </div>
                </div>

            </div>
        )
    }
}
export default AccountSettings;*/