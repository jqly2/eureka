import React from 'react';
import profile1 from '../img/profile1.jpeg';
import profile2 from '../img/profile2.jpeg';
import profile3 from '../img/profile3.jpeg';
import profile4 from '../img/profile4.jpeg';
import profile5 from '../img/profile5.jpeg';
import profile6 from '../img/profile6.jpeg';
import profile7 from '../img/profile7.jpeg';
import profile8 from '../img/profile8.jpeg';
import profile9 from '../img/profile9.jpeg';
import profile10 from '../img/profile10.jpg';
import profile11 from '../img/profile11.jpg';
import profile12 from '../img/profile12.jpg';
import profile13 from '../img/profile13.jpg';
import profile14 from '../img/profile14.jpg';
// import profilePH from '../img/profilePH.png';
import profileAd1 from '../img/profile-adv1.jpg';
import profileAd2 from '../img/profile-adv2.jpeg';
import profileAd3 from '../img/profile-adv3.jpeg';
import profileAd4 from '../img/profile-adv4.jpg';
import profileAd5 from '../img/profile-adv5.jpg';
import ReactTooltip from 'react-tooltip';

class AboutTeam extends React.Component {

    render() {

        return (
            <div className="App-About-Tabs-Eureka">
                <div className="App-About-Tabs-Eureka-Comapny">
                    <div className="App-About-Tabs-Eureka-Company-Info">
                        <h2>About Us</h2>
                        <p>American  homeownership,  personal  or  for  investing,  has  been  the  primary  method  for  growing  and  passing  on  wealth  to  the  next  generation.    After  the  real  estate  crisis  of  2008,  a  generation  of  Americans  passed  on  this  traditional  investment.    We  believe  this  $32  trillion  industry  can  be  simplified  and  more  accessible,  allowing  regular  consumers  to  join  the  ranks  of  successful  investors  and  close  the  inequality  gap. </p>
                    </div>

                    <div className="App-About-Tabs-Eureka-Company-Info">
                        <h2>Our Approach</h2>
                        <p>Eureka  was  built  with  extensive  amounts  of  data...  but  no  one  wants  to  look  at  spreadsheets  online.</p>
                        <p>We  used  our  technology  and  investment  backgrounds,  creating  an  innovative  and  visually  friendly  approach  to  finding  your  next  real  estate  investment.    There  are  users  who  still  want  to  see  the  inner  workings  before  they  trust  an  algorithm.    We  anticipated  that  and  have  built  in  audit  capabilities  in  the  product!    Learn  more  about  our  algorithmsand  our  investment  research  approach.</p>
                    </div>
                </div>
                <div className="App-About-Tabs-Eureka-Comapny">
                    <div className="App-About-Tabs-Eureka-Company-Info">
                        <h2>Our Origins</h2>
                        <p> Eureka  was  built  out  of  personal  frustrations  when  we,  the  founders,  wanted  a  head  start  in  building  our  own  wealth  using  real  estate  but  realized  there  weren’t  any  tools  or  data  to  help  regular  real  estate  investors.</p>
                    </div>
                </div>
                <hr />
                <div className="App-About-Tabs-Eureka-Team">
                    <h2>Eureka's Team</h2>
                    <p>Eureka  is  innovating  a  more  transparent  and  accessible  approach  to  real  estate  investing.</p>
                    <button><a href="/about/careers">Current Job Openings</a></button>
                    <hr />
                    <div className="App-About-Tabs-Eureka-Team-Roster">
                        <h3> Founding Team </h3>
                        <div className="App-About-Tabs-Eureka-Team-Row">
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                <a href="https://www.linkedin.com/in/johntyoung1/" target="_blank" rel="noopener noreferrer" data-tip data-for='johnY'><img src={profile1} className="App-About-Profile" alt="Eureka Investments" /></a>
                                <ReactTooltip id='johnY' type='dark' place="bottom" globalEventOff='click'>
                                    <span>John Young - CEO/Co-Founder</span>
                                </ReactTooltip>
                            </div>
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                    <a href="https://www.linkedin.com/in/jamesluo90/" target="_blank" rel="noopener noreferrer" data-tip data-for='jamesL'>
                                        <img src={profile2} className="App-About-Profile" alt="Eureka Investments" />
                                    </a>
                                <ReactTooltip id='jamesL' type='dark' place="bottom" globalEventOff='click'>
                                    <span>James Luo - Head of Strategy/Co-Founder</span>
                                </ReactTooltip>
                            </div>
                        </div>
                        <div className="App-About-Tabs-Eureka-Team-Row">
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                    <a href="https://www.linkedin.com/in/amyhyoung/" target="_blank" rel="noopener noreferrer" data-tip data-for='amyY'>
                                        <img src={profile3} className="App-About-Profile" alt="Eureka Investments" /></a>
                                <ReactTooltip id='amyY' type='dark' place="bottom" globalEventOff='click'>
                                    <span>Amy Young - Head of Investor Relation/Co-Founder</span>
                                </ReactTooltip>
                            </div>
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                <a href="https://www.linkedin.com/in/larryg408/" target="_blank" rel="noopener noreferrer" data-tip data-for='larryG'><img src={profile4} className="App-About-Profile" alt="Eureka Investments" /></a>
                                <ReactTooltip id='larryG' type='dark' place="bottom">
                                    <span>Larry Guo - Legal Advisor</span>
                                </ReactTooltip>
                            </div>
                        </div>
                        <div className="App-About-Tabs-Eureka-Team-Row">
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                    <a href="https://www.linkedin.com/in/davidbmcgrouther/" target="_blank" rel="noopener noreferrer" data-tip data-for='davMc'>
                                        <img src={profile5} className="App-About-Profile" alt="Eureka Investments" /></a>
                                <ReactTooltip id='davMc' type='dark' place="bottom" globalEventOff='click'>
                                    <span>David McGrouther - Senior Product Manager</span>
                                </ReactTooltip>
                            </div>
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                <a href="https://www.linkedin.com/in/stephensalazar/" target="_blank" rel="noopener noreferrer" data-tip data-for='salS'><img src={profile6} className="App-About-Profile" alt="Eureka Investments" /></a>
                                <ReactTooltip id='salS' type='dark' place="bottom">
                                    <span>Stephen Salazar - VP of Sales</span>
                                </ReactTooltip>
                            </div>
                        </div>
                        <div className="App-About-Tabs-Eureka-Team-Row">
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                <a href="https://www.linkedin.com/in/feifei-mao/" target="_blank" rel="noopener noreferrer" data-tip data-for='feiM'>
                                        <img src={profile7} className="App-About-Profile" alt="Eureka Investments" /></a>
                                <ReactTooltip id='feiM' type='dark' place="bottom">
                                    <span>Fei Mao - VP of Engineering</span>
                                </ReactTooltip>
                            </div>
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                        <a href="https://www.linkedin.com/in/jonathan-q-ly/" target="_blank" rel="noopener noreferrer" data-tip data-for='jonL'>
                                            <img src={profile8} className="App-About-Profile" alt="Eureka Investments" /></a>
                                    <ReactTooltip id='jonL' type='dark' place="bottom">
                                        <span>Jonathan Ly - Front End Developer</span>
                                    </ReactTooltip>
                            </div>
                        </div>
                        <div className="App-About-Tabs-Eureka-Team-Row">
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                    <a href="https://www.linkedin.com/in/nera-zhang/" target="_blank" rel="noopener noreferrer" data-tip data-for='nera'>
                                        <img src={profile10} className="App-About-Profile" alt="Eureka Investments" /></a>
                                    <ReactTooltip id='nera' type='dark' place="bottom">
                                        <span>Nera Zhang - Product Marketing Manager</span>
                                    </ReactTooltip>
                            </div>
                                <div className="App-About-Tabs-Eureka-Team-Profile">
                                    <a href="https://www.linkedin.com/in/richardluu/" target="_blank" rel="noopener noreferrer" data-tip data-for='rich'>
                                        <img src={profile9} className="App-About-Profile" alt="Eureka Investments" /></a>
                                    <ReactTooltip id='rich' type='dark' place="bottom">
                                        <span>Richard Luu - Director of Design</span>
                                    </ReactTooltip>
                                </div>
                            {/* <div className="App-About-Tabs-Eureka-Team-Profile">
                                    <a href="https://www.linkedin.com/in/mohitgupt/" target="_blank" rel="noopener noreferrer" data-tip data-for='mohit'>
                                        <img src={profilePH} className="App-About-Profile" alt="Eureka Investments" /></a>
                                    <ReactTooltip id='mohit' type='dark' place="bottom">
                                        <span>Mohit Gupta - Director of Product</span>
                                    </ReactTooltip>
                            </div> */}
                        </div>
                        <div className="App-About-Tabs-Eureka-Team-Row">
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                <a href="https://www.linkedin.com/in/laurenmeichen/" target="_blank" rel="noopener noreferrer" data-tip data-for='lauC'>
                                    <img src={profile11} className="App-About-Profile" alt="Eureka Investments" /></a>
                                <ReactTooltip id='lauC' type='dark' place="bottom">
                                    <span>Lauren Chen - UI/UX Designer</span>
                                </ReactTooltip>
                            </div>
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                <a href="https://www.linkedin.com/in/naveen-kumar-a37a2822/" target="_blank" rel="noopener noreferrer" data-tip data-for='navK'>
                                    <img src={profile12} className="App-About-Profile" alt="Eureka Investments" /></a>
                                <ReactTooltip id='navK' type='dark' place="bottom">
                                    <span>Naveen Kumar- Senior Product Manager</span>
                                </ReactTooltip>
                            </div>
                        </div>
                        <div className="App-About-Tabs-Eureka-Team-Row">
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                <a href="https://www.linkedin.com/in/tungjustin/" target="_blank" rel="noopener noreferrer" data-tip data-for='jusT'>
                                    <img src={profile13} className="App-About-Profile" alt="Eureka Investments" /></a>
                                <ReactTooltip id='justT' type='dark' place="bottom">
                                    <span>Justin Tung - CRM Technical Engineering</span>
                                </ReactTooltip>
                            </div>
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                <a href="https://www.linkedin.com/in/victorpangs28/" target="_blank" rel="noopener noreferrer" data-tip data-for='vicP'>
                                    <img src={profile14} className="App-About-Profile" alt="Eureka Investments" /></a>
                                <ReactTooltip id='vicP' type='dark' place="bottom">
                                    <span>Victor Pang - Director of Investor Relations</span>
                                </ReactTooltip>
                            </div>
                        </div>
                    </div>
                    <div className="App-About-Tabs-Eureka-Team-Roster">
                        <h3> Advisors </h3>
                        <div className="App-About-Tabs-Eureka-Team-Row">
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                <a href="https://www.linkedin.com/in/jonathan-hsu-b5b186ab/" target="_blank" rel="noopener noreferrer" data-tip data-for='jonH'>
                                    <img src={profileAd1} className="App-About-Profile" alt="Eureka Investments" /></a>
                                <ReactTooltip id='jonH' type='dark' place="bottom" globalEventOff='click'>
                                    <span>Jonathan Hsu - Data Modeling Advisor</span>
                                </ReactTooltip>
                            </div>
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                <a href="https://www.linkedin.com/in/alekslitvak/" target="_blank" rel="noopener noreferrer" data-tip data-for='alexL'>
                                    <img src={profileAd2} className="App-About-Profile" alt="Eureka Investments" />
                                </a>
                                <ReactTooltip id='alexL' type='dark' place="bottom" globalEventOff='click'>
                                    <span>Alex Litvak - Technical Advisor, Data Intrastructure</span>
                                </ReactTooltip>
                            </div>
                        </div>
                        <div className="App-About-Tabs-Eureka-Team-Row">
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                <a href="https://www.linkedin.com/in/matthewvilleneuve/" target="_blank" rel="noopener noreferrer" data-tip data-for='mattV'>
                                    <img src={profileAd3} className="App-About-Profile" alt="Eureka Investments" /></a>
                                <ReactTooltip id='mattV' type='dark' place="bottom" globalEventOff='click'>
                                    <span>Matthew Villenueve - Technical Advisor, User Interface</span>
                                </ReactTooltip>
                            </div>
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                <a href="https://www.linkedin.com/in/jwl-justinlee/" target="_blank" rel="noopener noreferrer" data-tip data-for='jusL'>
                                    <img src={profileAd4} className="App-About-Profile" alt="Eureka Investments" /></a>
                                <ReactTooltip id='jusL' type='dark' place="bottom" globalEventOff='click'>
                                    <span>Justin Lee - UI/UX Mobile Advisor</span>
                                </ReactTooltip>
                            </div>
                        </div>
                        <div className="App-About-Tabs-Eureka-Team-Row">
                            <div className="App-About-Tabs-Eureka-Team-Profile">
                                <a href="https://cims.nyu.edu/people/profiles/RANGAN_Aaditya.html" target="_blank" rel="noopener noreferrer" data-tip data-for='aadiR'>
                                    <img src={profileAd5} className="App-About-Profile" alt="Eureka Investments" /></a>
                                <ReactTooltip id='aadiR' type='dark' place="bottom" globalEventOff='click'>
                                    <span>Aaditya Rangan - Data Science/Analytics Advisor</span>
                                </ReactTooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutTeam


// WEBPACK FOOTER //
// ./src/components/about-team.js