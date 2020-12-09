import { MenuItem, NavDropdown, Nav } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import React from 'react';
import profile from '../img/person.png';
import logo from '../img/eureka-logo.png';
import navdrop from '../img/eureka-logo-shrunk.png';
import { connect } from 'react-redux';
import { updateUser } from '../actions/user-actions';
// import Payment from './payment.js';

// import FeedbackMenuItem from './feedbackMenuItem.js';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleDef: true,
            showPayment: false
        }
        this.checkLogin = this.checkLogin.bind(this);
        // this.openPayment = this.openPayment.bind(this);
    }

    checkLogin() {
        //When they sign out, need to add location change to '/product'
        localStorage.removeItem('userData')
        this.onUpdateUser('logout');
    }

    // openPayment() {
    //     this.setState({showPayment: true});
    //     console.log(this.state.showPayment);
    // }

    onUpdateUser(event) {
        this.props.onUpdateUser(event);
    }

    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData !== null) {
            this.setState({ toggleDef: false });
        }
        else {
            this.setState({ toggleDef: true });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            const userData = JSON.parse(localStorage.getItem('userData'));
            if (userData !== null){
                this.setState({ toggleDef: false });
            }
            else{
                this.setState({ toggleDef: true });
            }
        }
        else if (this.props.user !== prevProps.user) {
            if (this.props.user === 'logout') {
                this.setState({ toggleDef: true });
            }
            else {
                this.setState({ toggleDef: false });
            }
        }
    }

    render() {
        return (
            <header>
                <div className="app-banner">
                    {/* <h4>Test Banner</h4> */}
                 </div>
                <div className="App-header">
                    <a href="/"><img src={logo} className="App-header-logo" alt="Eureka Investments" /></a>
                    {/* Need to add the react-router to these pages and set the main map page to the / or /map */}
                    <div className="left-navbar">
                        <div className="left-navbar-default">
                            <Link className="nav-item" to="/">Home</Link>
                            <Link className="nav-item" to="/product">Product</Link>
                            <Link className="nav-item" to="/price">Price</Link>
                            <Link className="nav-item" to="/about/team">About Us</Link>
                            {/* <Link className="nav-item" to="/blog">Blog</Link> */}
                        </div>
                        <NavDropdown
                            title={
                                <img src={navdrop} alt="Nav-Drop" />
                            }
                            className="eureka-dropdown-nav" id="eureka-dropdown-nav">
                            <MenuItem componentClass='span'><Link className="nav-item-drop" to="/">Home</Link></MenuItem>
                            <MenuItem componentClass='span'><Link className="nav-item-drop" to="/product">Product</Link></MenuItem>
                            <MenuItem componentClass='span'><Link className="nav-item-drop" to="/price">Price</Link></MenuItem>
                            <MenuItem componentClass='span' onClick={this.checkLogin}><Link className="nav-item-drop" to="/about">About Us</Link></MenuItem>
                            {/* <MenuItem componentClass='span'><Link className="nav-item-drop" to="/blog">Blog</Link></MenuItem> */}
                        </NavDropdown>
                    </div>
                        <Nav bsStyle="pills" pullRight className="right-navbar" style={{ visibility: this.state.toggleDef ? 'hidden' : 'visible' }}>
                            <NavDropdown id="userDrop"
                                title={
                                    <span><img src={profile} alt="Profile" /></span>
                                }
                                className="eureka-dropdown-menu" pullRight>
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Account Settings</MenuItem>
                                <MenuItem>Favorites</MenuItem>
                                {/* <MenuItem onClick={this.openPayment}>Payment</MenuItem> */}
                                {/* {this.state.showPayment ? <Payment/> : null} */}
                                <MenuItem onClick={this.checkLogin}>Log out</MenuItem>
                            </NavDropdown>
                        </Nav>
                </div>
            </header >
        )
    }
 
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
};

const mapActionsToProps = {
    onUpdateUser: updateUser,
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Header));


// WEBPACK FOOTER //
// ./src/components/header.js