import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';

export default class extends Component {
    render () {
        return(
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <ul className="top-header-nav">
                                <li className="main-color"><a href="#">Purchase</a></li>
                                <li className="main-color"><a href="#">Privacy Policy</a></li>
                                <li className="main-color"><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <ul className="top-header-social-nav">
                                <li className="main-color"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="main-color"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li className="main-color"><a href="#"><i className="fab fa-google-plus"></i></a></li>
                                <li className="main-color"><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li className="main-color"><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                <li className="main-color"><a href="#"><i className="fab fa-dribbble"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}