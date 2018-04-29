import React, { Component } from 'react';
import R from 'ramda';
import { Preloader, Header } from 'components';

class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <div>
            <Header />
        </div>
        );
    }
};

export default Index;