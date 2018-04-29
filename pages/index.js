import React, { Component } from 'react';
import stylesheet from 'styles/index.scss';
import bootstrap from 'styles/bootstrap.min.css';
import fontAwesome from 'styles/font-awesome.min.css';
import withData from '../lib/apollo';
import Index from 'views/App';
import {deepOrange500} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
if (!process.tapEventInjected) {
    injectTapEventPlugin()
    process.tapEventInjected = true
  }
class IndexPage extends Component {
 static getInitialProps({ req }) {
    const userAgent = process.browser ? navigator.userAgent : req.headers['user-agent'];
    return { userAgent };
 }

 constructor(props, context) {
     super(props, context);
     this.state = {
         open:false
     }
 }

 handleRequestClose = () => {
    this.setState({
      open: false
    })
  }

  handleTouchTap = () => {
    this.setState({
      open: true
    })
  }

  render() {
    const { userAgent, data } = this.props;

    const standardActions = (
        <FlatButton
          label='Ok'
          primary={Boolean(true)}
          onTouchTap={this.handleRequestClose}
        />
      );

      return(
        <MuiThemeProvider muiTheme={getMuiTheme({userAgent})}>
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <style dangerouslySetInnerHTML={{ __html: bootstrap }} />
            <style dangerouslySetInnerHTML={{ __html: fontAwesome }} />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossOrigin="anonymous" />
            <Index />
        </MuiThemeProvider>
      );
  }
}

export default withData(IndexPage);