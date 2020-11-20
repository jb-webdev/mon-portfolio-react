/**
 * @author j.boero
 * Projet : Portfolio
 * * Novembre 2020
 * 
 * Compo skills data
 * 
 */
import L_HTML5 from "../../assets/img/skills/html5.png";
import L_CSS3 from "../../assets/img/skills/css3.png";
import L_SASS from "../../assets/img/skills/sass.png";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
// import L_STYLED_COMPONENTS from "../../assets/img/skills/styled-components.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.png";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.png";
import L_MYSQL from "../../assets/img/skills/mysql.png";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";

export const Skills = {
    frontend: [
        {
          link: "https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3",
          imgAltText: "HTML 5",
          imgSrc: L_HTML5,
          skillName: "HTML5",
        },
        {
          link: "https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3",
          imgAltText: "CSS 3",
          imgSrc: L_CSS3,
          skillName: "CSS3",
        },
        {
          link: "https://openclassrooms.com/fr/courses/6175841-apprenez-a-programmer-avec-javascript",
          imgAltText: "JavaScript",
          imgSrc: L_JAVASCRIPT,
          skillName: "JavaScript",
        },
        {
          link: "https://sass-lang.com/",
          imgAltText: "Sass",
          imgSrc: L_SASS,
          skillName: "Sass",
        },
        {
          link: "https://getbootstrap.com/",
          imgAltText: "Bootstrap",
          imgSrc: L_BOOTSTRAP,
          skillName: "Bootstrap",
        },
        {
          link: "https://reactjs.org/",
          imgAltText: "React JS",
          imgSrc: L_REACT,
          skillName: "React JS",
        },
        {
          link: "https://reacttraining.com/react-router/",
          imgAltText: "React Router",
          imgSrc: L_REACT_ROUTER,
          skillName: "React Router",
        },
        {
          link: "https://react-bootstrap.github.io/",
          imgAltText: "React Bootstrap",
          imgSrc: L_REACT_BOOTSTRAP,
          skillName: "React Bootstrap",
        },
      ],
    backend: [
        {
          link: "https://nodejs.org/en/",
          imgAltText: "Node.js",
          imgSrc: L_NODE_JS,
          skillName: "Node.js",
        },
        {
          link: "https://expressjs.com/",
          imgAltText: "Express",
          imgSrc: L_EXPRESS,
          skillName: "Express",
        },
      ],
    hostingPlatforms: [
        {
          link: "https://pages.github.com/",
          imgAltText: "GitHub Pages",
          imgSrc: L_GITHUB_PAGES,
          skillName: "GitHub Pages",
        },
      ],
    programmingLanguages: [
        {
          link: "https://openclassrooms.com/fr/courses/6175841-apprenez-a-programmer-avec-javascript",
          imgAltText: "JavaScript",
          imgSrc: L_JAVASCRIPT,
          skillName: "JavaScript",
        },
      ],
    databases: [
        {
          link: "https://openclassrooms.com/fr/courses/1959476-administrez-vos-bases-de-donnees-avec-mysql",
          imgAltText: "MY-SQL",
          imgSrc: L_MYSQL,
          skillName: "MY-SQL",
        },
        {
          link: "https://www.mongodb.com/",
          imgAltText: "MongoDB",
          imgSrc: L_MONGODB,
          skillName: "MongoDB",
        },
      ],
    versionControl: [
        {
          link: "https://git-scm.com/",
          imgAltText: "GIT",
          imgSrc: L_GIT,
          skillName: "GIT",
        },
      ],
}