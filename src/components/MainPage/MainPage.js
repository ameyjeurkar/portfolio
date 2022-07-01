import React from "react";
import Header from './../Header/Header';
import SocialMedia from "../SocialMedia/SocialMedia";
import Main from './../../assets/images/main_bg2.jpg';
import './../MainPage/MainPage.css';

const MainPage = () => {
    const myRef = document.querySelector('.scrollable-div')
    // const [index, setIndex] = useState(0);
    // const [subIndex, setSubIndex] = useState(0);
    // const [blink, setBlink] = useState(true);
    // const [reverse, setReverse] = useState(false);

    // // typeWriter
    // useEffect(() => {
    //   if (index === words.length - 1 && subIndex === words[index].length) {
    //     return;
    //   }

    //   if (
    //     subIndex === words[index].length + 1 && 
    //     index !== words.length - 1 && 
    //     !reverse 
    //   ) {
    //     setReverse(true);
    //     return;
    //   }

    //   if (subIndex === 0 && reverse) {
    //     setReverse(false);
    //     setIndex((prev) => prev + 1);
    //     return;
    //   }

    //   const timeout = setTimeout(() => {
    //     setSubIndex((prev) => prev + (reverse ? -1 : 1));
    //   }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
    //               150, parseInt(Math.random() * 350)));

    //   return () => clearTimeout(timeout);
    // }, [subIndex, index, reverse]);

    // // blinker
    // useEffect(() => {
    //   const timeout2 = setTimeout(() => {
    //     setBlink((prev) => !prev);
    //   }, 500);
    //   return () => clearTimeout(timeout2);
    // }, [blink]);

    return (
      <div id="homeSection" className="containers">
        <img className="image" src={Main} width="100%" alt="#" />
        <div className="header-containers">
            <Header />
        </div>
        <div className="box">
          <span className="myname mx-0 px-0">Amey Jeurkar</span>
          <span className="what-am-i mx-0 px-0">
            {/* I'm a <b>{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</b> */}
            I'm a <b> Full Stack Developer</b>
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