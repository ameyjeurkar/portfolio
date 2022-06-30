import React from "react";
// import Typewriter from "typewriter-effect";
import Header from './../Header/Header';
import SocialMedia from "../SocialMedia/SocialMedia";
import Main from './../../assets/images/main_bg2.jpg';
import './../MainPage/MainPage.css';
// const words = ["Full Stack Developer"];

const MainPage = () => {
    // const myRef = document.querySelector('.scrollable-div')

    return (
      <div id="homeSection" className="containers">
        <img className="image" src={Main} width="100%" alt="#" />
        <div className="header-containers">
            <Header />
        </div>
        <div className="box">
          <span className="myname mx-0 px-0">Amey Jeurkar</span>
          <span className="what-am-i mx-0 px-0">
            I'm a <b>Full Stack Developer</b>
            {/* I'm a <b>{" "} 
            <Typewriter
              onInit={(typewriter)=> {
              typewriter              
              .typeString("Full Stack Developer")                
              .pauseFor(1000)
              .deleteAll()
              .typeString("Full Stack Developer")
              .start();
              }}
            />
            </b> */}
          </span>
          <hr className="text-seperator"></hr>
          <div className="social">
            <SocialMedia page="MainPage"/>
          </div>
        </div>
      </div>
    );
}

export default MainPage;