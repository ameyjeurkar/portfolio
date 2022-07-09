import ReactLogoImage from './../assets/images/tech_icons/react_png.png';
import AngularLogoImage from './../assets/images/tech_icons/angular_png.png';
import VuejsLogoImage from './../assets/images/tech_icons/vuejs_png.png';
import JavascriptLogoImage from './../assets/images/tech_icons/javascript_png.png';

/* background: rgb(68, 141, 205); blue = react */
/* background: rgb(227, 49, 49); red = angular */ 
/* background: rgb(12, 130, 12); green = vue */
/* background: rgb(255, 255, 0); yellow = javascript */
/* background: rgb(255, 255, 0); yellow = javascript */
export const getProjectTechnology = (frameworkName) => {
    if(frameworkName === 'react') {
      return {framework: ReactLogoImage, background: 'rgb(68, 141, 205)'};
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
}