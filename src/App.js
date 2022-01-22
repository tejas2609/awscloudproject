import './App.css';
import logo1 from '../src/images/logo.png';
import slideimg1 from '../src/images/slideimg1.svg';
import slideimg2 from '../src/images/slideimg2.svg';
import slideimg3 from '../src/images/slideimg3.svg';
import slideimg4 from '../src/images/slideimg4.svg';
import React, {Component} from 'react';
import { render } from 'react-dom';

class App extends Component {
    constructor(){
        var date = new Date(),
        date = date.getDate();
        var month = new Date(),
        month = (month.getMonth() + 1); 
        var time = new Date(),
        time = time.getHours() + ':' + time.getMinutes();
        super();
        this.state = {
            currentDate : date,
            currentTime : time,
            currentMonth : month
        }
    }
    render(){
        return (
            <div class="googlemeet">
                <nav>
                    <div class="left-item">
                        <img src={logo1}></img>
                    </div>
                    <div class="right-item">
                        <div class="date-time">
                            <span id="date">{ this.state.currentDate }</span>
                            <span>/</span>
                            <span id="month">{this.state.currentMonth}</span>
                            <span>•</span>
                            <span id="time">{this.state.currentTime}</span>
                        </div>
                        <div>
                            <i class="far fa-question-circle"></i>
                        </div>
                        <div>
                            <i class="far fa-comment-alt"></i>
                        </div>
                        <div>
                            <i class="fa fa-cog"></i>
                        </div>
                        <div>
                            <i class="fa fa-ellipsis-v"></i>
                        </div>
                        <div class="login-icon">
                            <span id="log-icon">
                                <i class="far fa-user"></i>
                            </span>
                        </div>
                    </div>
                </nav>
                <main>
                    <div class="page-content">
                        <ul>
                            <li>
                                <p class="head">Premium video meetings.</p>
                                <p class="head">Now free for everyone.</p>
                                <p class="subhead">We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.</p>
                                <div class="meet-creds">
                                    <button class="n_meet">
                                        <i class="fa fa-video-camera"></i><span>New meeting</span>
                                    </button>
                                    <input type="text" id="meet_code" placeholder="Enter meeting code"></input>
                                    <button class="j_meet">
                                        Join
                                    </button>
                                </div>
                                <div class="diff-line"></div>
                                <div class="extra-info">
                                    <span><a href="https://support.google.com/meet/?hl=en#topic=7306097" target="_blank">Learn More</a></span> about our meetings.
                                </div>
                            </li>
                            <li>
                                <div class="info-list">
                                    <div class="blog">
                                        <div class="image">
                                            <img src={slideimg1}></img>
                                        </div>
                                        <p class="b_head">Get a link you can share</p>
                                        <p class="b_subhead">Click <strong>New Meeting</strong> to get a link you can send to people you want to meet with</p>
                                    </div>
                                    <div class="blog">
                                        <img src={slideimg2}></img>
                                        <p class="b_head">See everyone together</p>
                                        <p class="b_subhead">To see more people at the same time, go to Change layout in the More options menu</p>
                                    </div>
                                    <div class="blog">
                                        <img src={slideimg3}></img>
                                        <p class="b_head">Plan ahead</p>
                                        <p class="b_subhead">Click <strong>New Meeting</strong>  to schedule meetings in Google Calendar and send invites to participants</p>
                                    </div>
                                    <div class="blog">
                                        <img src={slideimg4}></img>
                                        <p class="b_head">Your meeting is safe</p>
                                        <p class="b_subhead">No one can join a meeting unless invited or admitted by the host</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>   
        );
    }
}

export default App;
