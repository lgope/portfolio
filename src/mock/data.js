import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Lakshman | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: `I'm lakshman gope. This is my portfolio. Develop using react, gatsby, sass, styled-components`, // e.g: Welcome to my website
  keywordContent: `lakshmangope portfolio, lakshmangope gatsby portfolio`,
  authorName: `Lakshman Gope`,
};

// HERO DATA
export const heroData = {
  title: `Hello 👋,`,
  name: `Lakshman`,
  subtitle: '',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm a professional and passionate Full Stack Developer focused on efficiency and constant learning. Courteous and enthusiastic, I am interested in Web Applications and everything in its orbit. I fascinated by web programming, e.g., developing apps and building websites. I am gaining knowledge and ideas working in this area. I am keen to gain more experience in the field. `,
  paragraphTwo: `For this reason, I'm looking for a company willing to offer me a placement among its developers. In return, I would offer my full commitment, and be a pleasant and friendly addition to a team. I am, therefore currently looking for a job or an internship as a web developer. I always want to learn more, do more, and be more. I’m also a firm believer that we should never settle. I’m hard working, super curious, passionate, committed, and also a fast learner!`,
  paragraphThree: `My current stack of languages/technologies is:
  HTML5 - CSS3 - JAVASCRIPT - SASS - WEBPACK - REACTJS - STYLED COMPONENTS - CSS MODULES - NODEJS - EXPRESSJS - MONGODB - SQL - FIREBASE -  POSTGRESQL.`,
  resume: `https://docs.google.com/document/d/1pKtMEvnzgCAJWzb8j-qsQF7Ihxi8DJt3ikreacT0WXY/edit?usp=sharing`, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'natours.jpg',
    title: 'Natours',
    info: 'An awesome tour booking site.',
    info2: `Pug, Parcel.js, Node.js, Express.js, Mongoose, MongoDB Atlas, Stripe, Heroku`,
    url: 'https://lakshman-natours.herokuapp.com/',
    repo: 'https://github.com/lgope/Natours', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'covid-19.png',
    title: 'COVID-19',
    info: 'A simple web app for tracking coronavirus (Covid-19)',
    info2: `Reactjs, css, mathdro API`,
    url: 'https://covid19-ometer.netlify.com/',
    repo: 'https://github.com/lgope/covid-19', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'fashion-clothing.png',
    title: 'Fashion Clothing',
    info: `Full Stack e-commerce website where peoples can purchase their choosable clothes.`,
    info2: `React.js, Sass, Styled-Components, Redux, Node.js, Firebase, Stripe`,
    url: `https://lakshman-fashion-clothing.herokuapp.com/`,
    repo: 'https://github.com/lgope/fashion-clothing', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'faceDetectionBrain.jpg',
    title: 'Face Detection Brain',
    info: `Face detection brain is a web application that detects faces from images using machine learning with provisions for registering, signing in, viewing the leaderboard and editing profiles. 🙂`,
    info2: `React.js, Tachyons, Expressjs, PostgreSQL, Clafifai API`,
    url: 'http://smart-face-detect-brain.herokuapp.com/',
    repo: 'https://github.com/lgope/face-detection-brain', // if no repo, the button will not show up
  },
];

// MORE PROJECTS DATA
export const moreProjectsData = [
  {
    id: uuidv1(),
    img: 'Project-Fair.png',
    title: 'Project Fair',
    info: `This is a simple web app. Where students can submit their project as a proposal or like so. And after submitted their project/proposal management team can see individual projects and they can accept or reject student's projects. After accepts or reject students can see the approved result.`,
    info2: `ejs, bootstrap, nodejs, expressjs, mongodb atlas`,
    url: `https://project-fair.herokuapp.com/`,
    repo: 'https://github.com/lgope/project-fair', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'cwh.jpg',
    title: 'Check Weather',
    info: `This is a rudimentary node app to check current weather conditions on a specified location. My motivation for making this app was to have a clean way to get my current city weather information. ☁☁`,
    info2: `handlebarsjs, css3, Nodejs, Expressjs, Mapbox API, Darksky API`,
    url: `https://lakshman-weather-app.herokuapp.com/`,
    repo: 'https://github.com/lgope/check-weather', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'url-shortener.png',
    title: 'URL Shortener',
    info: `A simple URL shortener. Which is generate a unique id for each URL after clicking in the shrink button. Using the id program find the URL in the database and redirect the URL page after click in the short URL id.`,
    info2: `ejs, bootstrap, Nodejs, Expressjs, mongodb`,
    url: `https://lakshman-url-shortener.herokuapp.com/`,
    repo: 'https://github.com/lgope/url-shortener', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'realTimeFaceDetection.png',
    title: 'Real Time Face Detection',
    info: `Real Time Face Detection With Face Expression. 🙂`,
    info2: `html, js dom, face-api.js`,
    url: `https://lgope-real-time-face-detection.netlify.com/`,
    repo: 'https://github.com/lgope/real-time-face-detection', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'laptopstore.jpg',
    title: 'Laptop Store',
    info: `This is a laptop store demo web. And it's my first nodejs web project. 🙂`,
    info2: `html5, css3, Nodejs, Expressjs, File System`,
    url: 'https://the-laptop-shop.herokuapp.com/',
    repo: 'https://github.com/lgope/Laptop-Store', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'robo-friends.png',
    title: 'Robo Friends',
    info: `Robo Friends is a ReactJS web application that is a Card UI and has different robot information in card form and we can search dynamically through those cards by name of the robot. 🤖`,
    info2: `React.js, Tachyons, RoboHash API`,
    url: 'https://lgope.github.io/robo-friends/',
    repo: 'https://github.com/lgope/robo-friends', // if no repo, the button will not show up
  },

  {
    id: uuidv1(),
    img: 'farmhome.jpg',
    title: 'Node Farm',
    info: `This is a mini project which is Node-Farm. Using node.js file system. 🗽👩‍🌾`,
    info2: `html5, css3, Nodejs, Expressjs, File System`,
    url: 'http://lakshman-farm.herokuapp.com/',
    repo: 'https://github.com/lgope/node-farm', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'budgetyhome.jpg',
    title: 'Budget App',
    info: `Budgety the single page web application where users can keep track of their income and expenses. 💲`,
    info2: `html5, css3, javascript-dom`,
    url: 'https://lgope.github.io/Budget-App/',
    repo: 'https://github.com/lgope/Budget-App', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'gcggh.jpg',
    title: 'Gradient Background Generator',
    info: `This is an app that can generate manual or random linear background colors! 🗽❄`,
    info2: `html5, css3, javascript-dom`,
    url: 'https://lgope.github.io/Gradient-Background-Generator/',
    repo: 'https://github.com/lgope/Gradient-Background-Generator', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'htmltags.jpg',
    title: 'Html Tags',
    info: `HTML tags with code & output 🗽📃 This web page may gonna helpful for those who are learning HTML for the first time..`,
    info2: `html5, css3, bootstrap4`,
    url: 'https://lgope.github.io/html-tags/',
    repo: 'https://github.com/lgope/html-tags', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'lakshman.gope2@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/lgope',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lakshman-gope-ba8847154/',
    },
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/LakshmanGope',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
