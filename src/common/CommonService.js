import ReactLogoImage from './../assets/images/tech_icons/react_png.png';
import AngularLogoImage from './../assets/images/tech_icons/angular_png.png';
import VuejsLogoImage from './../assets/images/tech_icons/vuejs_png.png';
import JavascriptLogoImage from './../assets/images/tech_icons/javascript_png.png';
import MernStackLogoImage2 from '../assets/images/tech_icons/mern_stack_png2.png';
import MeanStackLogoImage1 from '../assets/images/tech_icons/mean_stack_3.png';
// import MernStackLogoImage3 from '../assets/images/tech_icons/mern_stack_png3.jpeg';

/* background: rgb(68, 141, 205); blue = react */
/* background: rgb(227, 49, 49); red = angular */ 
/* background: rgb(12, 130, 12); green = vue */
/* background: rgb(255, 255, 0); yellow = javascript */
/* background: rgb(255, 255, 0); yellow = javascript */
export const getProjectTechnology = (frameworkName) => {
    if(frameworkName === 'react') {
      return {framework: ReactLogoImage, background: 'linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%)'};
    }
    else if(frameworkName === 'angular') {
        return {framework: AngularLogoImage, background: 'rgb(227, 49, 49)'};
    }
    else if(frameworkName === 'vue') {
        return {framework: VuejsLogoImage, background: 'rgb(12, 130, 12)'};
    }
    else if(frameworkName === 'javascript') {
        return {framework: JavascriptLogoImage, background: 'rgb(222, 200, 75)'};
    }
    else if(frameworkName === 'mern') {
        return {framework: MernStackLogoImage2, background: 'linear-gradient(to top, #50cc7f 0%, #f5d100 100%)'};
    }
    else if(frameworkName === 'mean') {
        return {framework: MeanStackLogoImage1, background: 'rgb(52, 52, 52)'};
    }
}