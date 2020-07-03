import React from 'react'
import {ListItemIcon,ListItemText} from '@material-ui/core'
import '../scss/navbar.scss'
import { Home ,Users,Package,HelpCircle, Book} from 'react-feather'
import { Link } from 'react-router-dom'
class Navbar extends React.Component{
    render(){
        return(
           <div className="navbar">
               <div className="navbar-logo">
                       COVID19<span>INDIA</span>                   
               </div>

               <div className="navbar-menulist">
                    <div className="navbar-menulist-item">
                        <span><Home/></span>
                        <span className="name">Home</span>
                    </div>
                    <div className="navbar-menulist-item">
                        <span><Users/></span>
                        <span className="name">Demographics</span>
                    </div>
                    <div className="navbar-menulist-item">
                        <span><Package/></span>
                        <span className="name">Essentials</span>
                    </div>
                    <div className="navbar-menulist-item">
                        <span><HelpCircle/></span>
                        <span className="name">About</span>
                    </div>
                    <div className="navbar-menulist-item">
                        <span><Book/></span>
                        <span className="name">Blog</span>
                    </div>
               </div>               
           </div>
        )
    }
} 
export default Navbar