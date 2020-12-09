import React from 'react';
import first from '../img/landing.jpg';
import headerA from '../img/aboutA.jpeg';
import headerB from '../img/aboutB.jpeg';
import headerC from '../img/aboutC.jpeg';
import feedA from '../img/feedA.jpg';
import feedB from '../img/feedB.jpg';
import feedC from '../img/feedC.jpg';
import Footer from './footer.js';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            feedback: '"It  would  help  narrow  down  search  time  for  my investor clients as well as myself. Right now I’m  wading  through  multiple  sites  including  Redfin, MLS, Zillow  to  assess  market  conditions. This  will  save  any  investment  firm  hours / week."',
            opacity: 0.5,
            select1: "App-home-feed-sub-selected",
            select2: "App-home-feed-sub",
            select3: "App-home-feed-sub",
        }
        this.updateFeed = this.updateFeed.bind(this);
    }

    updateFeed(name){
        if(name === 'MCol'){
            this.setState({
                feedback: '"It  would  help  narrow  down  search  time  for  my investor clients as well as myself. Right now I’m  wading  through  multiple  sites  including  Redfin, MLS, Zillow  to  assess  market  conditions. This  will  save  any  investment  firm  hours / week."',
                select1: "App-home-feed-sub-selected",
                select2: "App-home-feed-sub",
                select3: "App-home-feed-sub",
            })
        }
        if(name === 'CrMc'){
            this.setState({
                feedback: '"The  curated  list  of  individual  properties  is  amazing. Great  opportunity  for  people  to  get  educated  on  investment  opportunities."', 
                select1: "App-home-feed-sub",
                select2: "App-home-feed-sub-selected",
                select3: "App-home-feed-sub",
            })
        }
        if(name === 'MiOs'){
            this.setState({
                feedback: '"I  love  the  visuals.  It  would  be  extremely  useful  if  I  can  share  this  with  investors...Great  lender  tool  as  well."',
                select1: "App-home-feed-sub",
                select2: "App-home-feed-sub",
                select3: "App-home-feed-sub-selected",
            })
        }
    }
    render(){
        return(
        <div className="App-home">
            <img src={first} className="App-home-img" alt="Eureka Investments" />
            <div className="App-home-about" id="aboutUs">
                <div className="App-home-about-title">
                    <h1>  Avoid  overpaying  on  investments </h1>
                    <h4>  We  help  all  investors,  beginners  and  veterans,  make  smart  real  estate  investments  by  giving  you  the  best  and  most  complete  data. Join  Eureka’s  growing  network  of  investors  to  see  why  they  always  rely  on  Eureka  to  help  them  make  profitable  investments. </h4>
                </div>
                <div className="App-home-about-subCon">
                    <div className="App-home-about-sub">
                        <img src={headerA} className="App-home-about-img" id="firstSub" alt="Eureka Investments" />
                        <h4> Automated  and  data  driven  investing  </h4>
                            <p>   Eureka  automates  your  investment  search.    Put  away  those  spreadsheets  and  let  us  take  care  of  the  research  for  you.   </p>
                    </div>
                    <div className="App-home-about-sub">
                        <img src={headerB} className="App-home-about-img" alt="Eureka Investments" />
                        <h4>  Industry  best  real  estate  investment  models </h4>
                            <p>     We  have  the  best  and  most  comprehensive  analytic  data  for  rental  and  fix  and  flip  investors  for  free.    </p>
                    </div>
                    <div className="App-home-about-sub">
                        <img src={headerC} className="App-home-about-img" alt="Eureka Investments" />
                        <h4>  Streamlined  investment  processes  help  save  you  time  and  money</h4>
                            <p>   Real  estate  investing  is  complicated  but  it  doesn’t  have  to  be.    Through  automation,  we  save  our  investors  time  and  money,  letting  them  focus  on  the  people  part  of  the  business.    </p>
                    </div>
                </div>
                <div className="App-home-about-start">
                    <button><a href="/product">Get Started</a></button>
                </div>
        </div>
            <div className="App-home-feed">
                <div className="App-home-feed-info">
                    <h1> Recent Feedback </h1>
                    <br/>
                    <h3>{this.state.feedback}</h3>
                </div>
                <div className="App-home-feed-subCon">
                    <div className={this.state.select1}>
                        <img src={feedA} className="App-home-feed-img" alt="Eureka Investments" onClick={() => this.updateFeed("MCol")} onMouseOver={() => this.updateFeed("MCol")}/>
                        <p>Mark  C.</p>
                        <p>Redfin</p>
                    </div>
                    <div className={this.state.select2}>
                        <img src={feedB} className="App-home-feed-img" alt="Eureka Investments" onClick={() => this.updateFeed("CrMc")} onMouseOver={() => this.updateFeed("CrMc")}/>
                        <p>Craig  M.</p>       
                        <p>Intero  Group</p>  
                    </div>
                    <div className={this.state.select3}>
                        <img src={feedC} className="App-home-feed-img" alt="Eureka Investments" onClick={() => this.updateFeed("MiOs")} onMouseOver={() => this.updateFeed("MiOs")} />
                        <p>Michael  O.</p>
                        <p>First Republic</p>
                    </div>
                </div>
            </div> 
            <Footer />           
        </div>
        );
    }
}

export default Home


// WEBPACK FOOTER //
// ./src/components/home.js