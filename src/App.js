import React, { Component } from 'react';
import './App.css';
import image from './images/A04I2281.jpg';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default" position="fixed">
                <Toolbar>
                  <Typography variant="h6" color="inherit">
                    Sean McNeil
                  </Typography>
                </Toolbar>
              </AppBar>
         <div>
            <img className="Banner-image" src={image} />
          </div>
          <div className = "Introduction-section">
          Hello! I am a Full Stack Engineer. <br />
          </div>
      </div>
    );
  }
}

export default App;
