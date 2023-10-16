import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Jeremie Dsouza',
  title: "Hi all, I'm Jeremie",
  description:
    "I'm a passionate Full Stack web developer with a keen interest in Front End Development and Web Design. I am currently looking for opportunities to work and enhance my skills in the Web Dev space.",
  resumeLink:
    'https://docs.google.com/document/d/1CyroQCKLuRP43o77mCwrC0wAmj1q6bRe8ha-l7KnTIw/edit?usp=sharing',
};

export const openSource = {
  githubUserName: 'stowaway4331',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/jeremie-dsouza/',
  github: 'https://github.com/stowaway4331',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) and Multi-Page-Apps in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Node.js & Spring Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'TypeScript',
          iconifyTag: 'logos:typescript-icon',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Java',
          iconifyTag: 'logos:java',
        },
        {
          skillName: 'Spring Boot',
          iconifyTag: 'logos:spring-icon',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'Storybook',
          iconifyTag: 'vscode-icons:file-type-storybook',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Practised working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        // {
        //   skillName: 'AWS',
        //   iconifyTag: 'logos:aws',
        // },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Vercel',
          iconifyTag: 'logos:vercel-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'MongoDB',
          iconifyTag: 'vscode-icons:file-type-mongo',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        // {
        //   skillName: 'Sentry',
        //   iconifyTag: 'logos:sentry-icon',
        // },
      ],
    },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       iconifyTag: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       iconifyTag: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       iconifyTag: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       iconifyTag: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       iconifyTag: 'logos:ganache-icon',
    //     },
    //   ],
    // },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '100',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'New Horizon College of Engineering',
    subHeader: 'Bachelor of Engineering in Computer Science',
    duration: 'December 2020 - June 2024',
    desc: '',
    grade: 'CGPA 7.97',
    descBullets: [
      // 'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
  {
    schoolName: 'Christ Academy Junior College',
    subHeader: 'High School',
    duration: 'June 2018 - March 2020',
    desc: '',
    grade: '95.6%',
    descBullets: [
      // 'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
];

// export const experience: ExperienceType[] = [
//   {
//     role: 'Frontend Developer',
//     company: 'Duseca Software',
//     companyLogo: '/img/icons/common/dusecaSoftware.jpg',
//     date: 'Apr 2022 – Jun 2022',
//     desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
//   },
//   {
//     role: 'API Engineer',
//     company: 'Duseca Software',
//     companyLogo: '/img/icons/common/dusecaSoftware.jpg',
//     date: 'Jan 2022 – Mar 2022',
//     desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
//     // descBullets: [
//     // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
//     // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     // ],
//   },
//   {
//     role: 'Full Stack Developer',
//     company: 'Bleed-AI',
//     companyLogo: '/img/icons/common/bleedAI.jpg',
//     date: 'Sept 2021 - Oct 2021',
//     desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
//   },
//   {
//     role: 'Backend Developer',
//     company: 'Wapidu',
//     companyLogo: '/img/icons/common/wapidu.jpg',
//     date: 'Sept 2021',
//     desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
//   },
// ];

export const projects: ProjectType[] = [
  {
    name: 'Merch webapp',
    desc: 'Made a login and dashboard page for people to manage their merch stores and check on their social media stats.',
    github: 'https://github.com/stowaway4331/next-trial',
    link: 'https://jeremie-nextauth.vercel.app/',
  },
  {
    name: 'Better Ideaflow',
    desc: 'Improved [ideaflow.io](https://www.ideaflow.io) landing page using React and Framer Motion to be a lot more cleaner and better looking using best practises',
    github: 'https://github.com/Stowaway4331/better-ideaflow',
    link: 'https://better-ideaflow.vercel.app/',
  },
  {
    name: 'img_to_css',
    desc: 'Convert images to pure css based on the box-shadow property and extract its code.',
    github: 'https://github.com/Stowaway4331/img_to_css',
    link: 'https://stowaway4331.github.io/img_to_css/',
  },
  {
    name: 'Online Code Editor',
    desc: 'Edit HTML, CSS and JavaScript code using this online code editor made in React',
    github: 'https://github.com/Stowaway4331/basic-code-editor',
    link: 'https://html-css-js-code-editor.netlify.app/',
  },
];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
// ];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Jeremie Dsouza',
  description: 'A passionate Full Stack Web Developer.',
  author: 'Jeremie Dsouza',
  image:
    'https://avatars.githubusercontent.com/u/92860009?s=400&u=956b127f1b6149b25c4e31ec359fb5151a129d31&v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Jeremie',
    'Jeremie Dsouza',
    '@stowaway4331',
    'stowaway4331',
    'Portfolio',
    'Jeremie Portfolio ',
    'Jeremie Dsouza Portfolio',
  ],
};
