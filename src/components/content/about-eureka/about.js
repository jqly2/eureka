import React from 'react';
import custom from '../img/eureka-about-img.jpg';
import { Route, Switch, NavLink } from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
import AboutTeam from './about-team.js';
import AboutCareers from './about-careers.js';
import FeedbackMenu from './about-feedbackMenu.js';
import Footer from './footer.js';

class About extends React.Component {
    render() {
        return (
            <div className="App-About">
                <div className="App-About-imgCont">
                    <img src={custom} className="App-About-img" alt="Eureka Investments" />
                    <h2>Eureka  has  one  mission: <br />  Help  Americans  invest  and  build  wealth  in  real  estate  successfully.</h2>
                </div>
                <div className="App-About-Tabs">
                    <div className="App-about-nav">
                        <NavLink activeStyle={{ fontWeight: 'bold' }} className="App-about-nav-item" to="/about/team">About Us</NavLink>
                        <NavLink activeStyle={{ fontWeight: 'bold' }} className="App-about-nav-item" to="/about/careers">Careers</NavLink>
                        <NavLink activeStyle={{ fontWeight: 'bold' }} className="App-about-nav-item" to="/about/feedback">Feedback</NavLink>
                        {/* <Link className="nav-item" to="/blog">Blog</Link> */}
                    </div>
                    <Switch>
                        <Route path="/about/team" component={AboutTeam} />
                        <Route path="/about/careers" component={AboutCareers} />
                        <Route path="/about/feedback" component={FeedbackMenu} />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About


// WEBPACK FOOTER //
// ./src/components/about.js