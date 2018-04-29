import React, { Component } from 'react';

export default class extends Component {
    render () {
        return(
            <div className="loader-con">
                <div className="preloader center">
                    <span className="slice"></span>
                    <span className="slice"></span>
                    <span className="slice"></span>
                    <span className="slice"></span>
                    <span className="slice"></span>
                    <span className="slice"></span>
                </div>
            </div>
        );
    }
}