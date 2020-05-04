import React, { Component } from 'react'
import HeaderComponent from '../components/HeaderComponents';
class AboutPage extends Component {
    render() {
        return (
            <div className = "aboutPage">
                <HeaderComponent pageActive = "aboutus"></HeaderComponent>
            </div>
        )
    }
}
export default AboutPage;