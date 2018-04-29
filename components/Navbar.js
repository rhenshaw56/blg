import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return(
                <nav className="site-navigation">
                    <div className="container">

                        <h1 className="site-title">
                            <a href="index-1.html">Blackbeard</a>
                        </h1>

                        <a href="#" className="navbar-toggle mobile-menu-btn visible-xs visible-sm">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span> <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </a>

                        <a href="#" className="nav-search-btn" data-toggle="modal" data-target="#search-modal">
                            <i className="fa fa-search"></i>
                        </a>


                        <ul className="primary-nav hidden-xs hidden-sm">
                            <li className="main-color has-children active">
                                <a href="#" className="effect">HOME</a>
                                <ul className="menu-dropdown">
                                    <li className="main-color"><a href="index.html" className="effect">HOME 1</a></li>
                                    <li className="main-color"><a href="index-1.html" className="effect">HOME 2</a></li>
                                    <li className="main-color"><a href="index-2.html" className="effect">HOME 3</a></li>
                                </ul>
                            </li>
                            <li className="main-color">
                                <a href="archive.html" className="effect">TRAVEL</a>
                            </li>
                            <li className="main-color">
                                <a href="archive.html" className="effect">LIFESTYLE</a>
                            </li>
                            <li className="main-color has-children">
                                <a href="#" className="effect">POST FORMAT</a>
                                <ul className="menu-dropdown">
                                    <li className="main-color"><a href="standard-post.html" className="effect">STANDARD</a></li>
                                    <li className="main-color"><a href="video-post.html" className="effect">VIDEO</a></li>
                                    <li className="main-color"><a href="gallery-post.html" className="effect">GALLERY</a></li>
                                    <li className="main-color"><a href="audio-post.html" className="effect">AUDIO</a></li>
                                </ul>
                            </li>
                            <li className="main-color">
                                <a href="about.html" className="effect">ABOUT</a>
                            </li>
                            <li className="main-color">
                                <a href="contact.html" className="effect">CONTACT</a>
                            </li>
                        </ul>

                        <div className="mobile-menu visible-xs visible-sm">
                            <a href="#" className="close-btn">
                                <span></span>
                                <span></span>
                            </a>
                            <ul>
                                <li className="main-color has-children active">
                                    <a href="#" className="effect">HOME</a>
                                    <ul className="menu-dropdown">
                                        <li className="main-color"><a href="index.html" className="effect">HOME 1</a></li>
                                        <li className="main-color"><a href="index-1.html" className="effect">HOME 2</a></li>
                                        <li className="main-color"><a href="index-2.html" className="effect">HOME 3</a></li>
                                    </ul>
                                </li>
                                <li className="main-color">
                                    <a href="archive.html" className="effect">TRAVEL</a>
                                </li>
                                <li className="main-color">
                                    <a href="archive.html" className="effect">LIFESTYLE</a>
                                </li>
                                <li className="main-color has-children">
                                    <a href="#" className="effect">POST FORMAT</a>
                                    <ul className="menu-dropdown">
                                        <li className="main-color"><a href="standard-post.html" className="effect">STANDARD</a></li>
                                        <li className="main-color"><a href="video-post.html" className="effect">VIDEO</a></li>
                                        <li className="main-color"><a href="gallery-post.html" className="effect">GALLERY</a></li>
                                        <li className="main-color"><a href="audio-post.html" className="effect">AUDIO</a></li>
                                    </ul>
                                </li>
                                <li className="main-color">
                                    <a href="about.html" className="effect">ABOUT</a>
                                </li>
                                <li className="main-color">
                                    <a href="contact.html" className="effect">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </nav>
        )
    }
}