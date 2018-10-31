import React, { Component } from 'react';
import './App.css';
import banner_image from './images/A04I2281.jpg';
import gt_logo from './images/gt_logo.png';
import c1_logo from './images/c1_logo.png';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


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
            <img className="Banner-image" src={banner_image} />
          </div>
          <div className = "Introduction-section">
                Hello! I am a Full Stack Engineer. <br />
          </div>
          <div className = "About-section">
            <div className = "About-card">
                <Card>
                <CardMedia
                  component="img"
                  alt="Georgia Tech"
                  className="media"
                  image={gt_logo}
                  title="Georgia Tech"
                />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                                Education
                        </Typography>
                        <Typography component="p">
                        I am currently pursuing a MS in Computer Science at Georgia Tech
                        with a specialization in Machine Learning. GPA: 4.0. Classes taken:
                        Artificial Intelligence, Computer Networks, and Data Visualizations and Analytics.
                        </Typography>
                        </CardContent>
                </Card>
            </div>
            <div className = "About-card">
            <Card>
            <CardMedia
              component="img"
              alt="Capital One"
              className="media"
              image={c1_logo}
              title="Capital One"
            />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                            Experience
                    </Typography>
                    <Typography component="p">
                    Most recently, I worked at Capital One as a full stack software engineer.
                    Applications included a metadata management system, tools marketplace,
                    customer data master search, and POCs for other tools. 
                    </Typography>
                    </CardContent>
            </Card>
             </div>
              <div className="About-card">
              <Card>
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                              Skills
                      </Typography>
                      <Typography component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                      </Typography>
                      </CardContent>
              </Card>
                          </div>
          </div>
      </div>
    );
  }
}

export default App;
