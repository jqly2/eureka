// import logo from './img/footLogo.png';
import React from 'react';

const Footer = () => (
    <footer className="App-footer">
        <div className="left-footer"> 
            <div className="footer-nav">
                <h5>Product</h5>
                <a href="#aboutUs">Overview</a>
                <a href="/product">For Investors</a>
            </div>
            <div className="footer-nav">
                <h5>Customers</h5>
                <a href="/customer/investors">Investors</a>
                <a href="/customer/brokers">Agents/Brokers</a>
                <a href="/customer/lenders">Lenders</a>
            </div>
            <div className="footer-nav">
                <h5>Platform</h5>
                <a href="/">Partner with Eureka</a>
            </div>
            <div className="footer-nav">
                <h5>Company</h5>
                <a href="/about/team">About Us</a>
                <a href="/about/careers">Careers</a>
                {/* <a href="/">Blog</a> */}
            </div>
            <div className="right-footer">
                {/* <img src={logo} className="App-logo" alt="Eureka Investments" /> */}
                <p>©  2019.    All  Rights  Reserved.</p>
                <p>1312 Clayton Street</p> 
                <p>San Francisco, CA 94114</p>
            </div>
        </div>
    </footer >
)

export default Footer
