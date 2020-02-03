import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Lakshman | Software Engineer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Lakshman',
  subtitle: 'I build websites and apps.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm a professional and passionate Software Developer focused on efficiency and constant learning.`,
  paragraphTwo: `My current stack of languages/technologies is:
  HTML5 - CSS3 - JAVASCRIPT - SASS - WEBPACK - REACTJS - STYLED COMPONENTS - CSS MODULES - FIREBASE - NODEJS - EXPRESSJS - MONGODB - SQL - POSTGRESQL.`,
  paragraphThree: `I would love to set up an introduction call to discuss how I could help your business and make your goals happen.`,
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
  {
    id: uuidv1(),
    img: 'robo-friends.png',
    title: 'Robo Friends',
    info: `Robo Friends is a ReactJS web application that is a Card UI and has different robot information in card form and we can search dynamically through those cards by name of the robot. 🤖`,
    info2: `React.js, Tachyons, RoboHash API`,
    url: 'https://lgope.github.io/robo-friends/',
    repo: 'https://github.com/lgope/robo-friends', // if no repo, the button will not show up
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
