import React from "react";
import Header from './../Header/Header';
import SocialMedia from "../SocialMedia/SocialMedia";
import Main from './../../assets/images/main_bg2.jpg';
import './../MainPage/MainPage.css';

const MainPage = () => {
    return (
      <div id="homeSection" className="containers">
        <img className="image" src={Main} loading="lazy" width="100%" alt="#" />
        <div className="header-containers">
            <Header />
        </div>
        <div className="box">
          <span className="myname mx-0 px-0">Amey Jeurkar</span>
          <span className="what-am-i mx-0 px-0">
            I'm a <b> Full-Stack Developer</b>
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
