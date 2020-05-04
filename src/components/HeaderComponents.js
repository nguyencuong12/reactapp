

import React, { Component } from 'react';
import './HeaderComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import $ from 'jquery';

class HeaderComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page:['home','contact','aboutus'],
           
        }
    }
    componentDidMount(){

       var checkbox = document.getElementById('check');
       checkbox.addEventListener('click',()=>{
            console.log("check",checkbox.checked);
            if(checkbox.checked === true){
                  $('body').css("overflow","hidden");
            }
            if(checkbox.checked === false){
                $('body').css("overflow","auto");
            }
           
       })
       var home = document.getElementsByClassName('home');
       var contact = document.getElementsByClassName('contact');
       var aboutus = document.getElementsByClassName('aboutus');
       home[0].classList.remove('active');
       contact[0].classList.remove('active');
       aboutus[0].classList.remove('active');

        this.state.page.map(newArray =>{
            if(newArray === this.props.pageActive){
               var PageActive = document.getElementsByClassName(newArray);
               PageActive[0].classList.add("active");
            }
        })
        
        
    }
    render() {
        return (
            <div className="header">
                <div className="content-header">
                <nav>
                    <input type = "checkbox" id = "check"></input>
                    <label className = "hambuger"for = "check">
                        <FontAwesomeIcon icon = {faBars}/>
                    </label>
                    
                    <label className = "logo">
                     <img src = "images/favicon.ico"></img>
                    </label>

                    <ul>
                        <li ><a className = "home" href = "/">Home</a></li>
                        <li><a className = "contact" href = "/contact">Contact</a></li>
                        <li><a className = "aboutus" href = "/aboutus">About Us</a></li>
                    </ul>
                </nav>

                   


                </div>
            </div>
        )
    }
}
export default HeaderComponents;