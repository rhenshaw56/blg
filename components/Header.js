import React, { Component } from 'react';
import { TopHeader, Navbar } from 'components';

export default class Header extends Component {
    render() {
        return (
            <div className="main-header header-2">
                <TopHeader />
                <Navbar />
            </div>
        )
    }
}
