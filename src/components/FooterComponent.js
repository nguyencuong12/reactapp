import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers,faBuilding,faPhotoVideo} from '@fortawesome/free-solid-svg-icons';
import './FooterComponent.css';
class FooterComponent extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer_content">

                    <div className="useful_link">
                        <h3>Useful links</h3>
                        {/* <ul> */}
                            <a href="#">Frequently Asked Questions</a>
                            <a href="#">Browsers and devices</a>
                            <a href="#">License</a>
                            <a href="#">ChangeLog</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Return/Refund policy</a>
                            <a href="#">For Resellers</a>
                        {/* </ul> */}

                    </div>

                    <div className="resources">
                        <h3>Resource</h3>
                       
                            <a href="#">MDB jQuery</a>
                            <a href="#">MDB Angular</a>
                            <a href="#">MDB React</a>
                            <a href="#">MDB Vue</a>
                            <a href="#">Support forum</a>
                            <a href="#">MDB Editor & Snippets</a>
                            <a href="#">Articles</a>
                            <a href="#">News</a>
                            <a href="#">Free templates</a>
                            <a href="#">Premium templates</a>
                      


                    </div>

                    <div className="free_tutorial">
                        <h3>Free Tutorial</h3>
                       
                            <a href="#">Basics (HTML/CSS/JS)</a>
                            <a href="#">Bootstrap & web design</a>
                            <a href="#">Angular</a>
                            <a href="#">React</a>
                            <a href="#">Vue</a>
                            <a href="#">WordPress</a>
                            <a href="#">Miscellaneous</a>

                        
                    </div>

                    <div className="company">
                        <h3>Company</h3>
                       
                            <a href="#"><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon> Our team</a>
                            <a href="#"><FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon> Company data</a>
                            <a href="#"><FontAwesomeIcon icon={faPhotoVideo}></FontAwesomeIcon> For media</a>

                       
                    </div>
                </div>
                <div class="copyright" >© 2020 Copyright: MDBootstrap.com</div>
            </div>
        )
    }
}
export default FooterComponent;