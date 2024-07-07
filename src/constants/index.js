import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind, 
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cloudtel,
  tekion,
  linux,
  kubernetes,
  nginx,
  apache,
  githubactions,
  jenkins,
  bootstrap,
  mysql,
  postgresql,
  sqlite,
  firebase,
  flask,
  fastapi,
  django,
  postman,
  python,
  c,
  cpp,
  bash,
  aws,
  gcp,
  heroku,
  resumeAnalysis,
  movieRecommendation,
  studentsPerformance,
  hackerrank,
  awsccp,
  gcpdg,
  pythoncert,
  awsball,
  az900,
  microsoft,
  dl_ai,
  coursera_1

} from "../assets";

export const about = `I'm passionate about exploring 🚀 data science and machine learning techniques to tackle complex challenges 💪 and uncover meaningful insights. I'm on a journey to deepen my understanding of data science, exploring 🤔 various methodologies and tools to extract actionable insights from data.
🤝 Let's Connect, I'm eager to connect with fellow data enthusiasts and professionals passionate about leveraging data for positive impact. Let's exchange ideas and explore opportunities together! ✌️`

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "Data Analytics",
    icon: mobile,
  },
  {
    title: "Frontend",
    icon: backend,
  },
  {
    title: "Python",
    icon: creator,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "flask",
    icon: flask,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "linux",
  //   icon: linux,
  // },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "kubernetes",
  //   icon: kubernetes,
  // },
  // {
  //   name: "bootstrap",
  //   icon: bootstrap,
  // },
  // {
  //   name: "nginx",
  //   icon: nginx,
  // },
  // {
  //   name: "apache",
  //   icon: apache,
  // },
  // {
  //   name: "githubactions",
  //   icon: githubactions,
  // },
  // {
    //   name: "jenkins",
    //   icon: jenkins,
    // },
  {
    name: "mysql",
    icon: mysql,
  },
  // {
    //   name: "sqlite",
  //   icon: sqlite,
  // },
  // {
  //   name: "firebase",
  //   icon: firebase,
  // },
  
  // {
  //   name: "fastapi",
  //   icon: fastapi,
  // },
  // {
  //   name: "django",
  //   icon: django,
  // },
  // {
  //   name: "postgresql",
  //   icon: postgresql,
  // },
  {
      name: "postman",
      icon: postman,
    },
  {
    name: "c",
    icon: c,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  // {
  //   name: "bash",
  //   icon: bash,
  // },
  // {
  //   name: "aws",
  //   icon: awsball,
  // },
  // {
  //   name: "gcp",
  //   icon: gcp,
  // },
  // {
  //   name: "heroku",
  //   icon: heroku,
  // },
];

const experiences = [
  {
    title: "Machine Learning Intern",
    company_name: "Codsoft",
    icon: tekion,
    iconBg: "#00bfa4",
    date: "Jul 2024 - Aug 2024",
    points: [
      "Built a strong foundation on the fundamentals of Machine Learning,NLP and Data Analysis",
      "Improved on efficient methods of developing a ML application",
      "Insights on industry Standards for development"
    ],
  },
];

const certifications = [
  {
    name:
      "Supervised Machine Learning: Regression and Classification ",
    image: coursera_1,
    icon: dl_ai,
    url: 'https://www.coursera.org/account/accomplishments/records/SRLXPJ8BSVZH'
  },
  // {
  //   name:
  //     "Google Cloud Digital Leader",
  //   image: gcpdg,
  //   icon: gcp,
  //   url: 'https://www.credential.net/b6adac8a-184c-4743-88ca-c5537628fcec?key=005f755bbbbabc1448a3463fd43634cc20af978e8e53952d2f17cf1ba9237d47&record_view=true'
  // },
  // {
  //   name:
  //   "Microsoft Azure Fundamentals",
  //   image: az900,
  //   icon: microsoft,
  //   url: 'https://www.credly.com/badges/ad668692-9764-4853-903d-f046266c1c15/public_url'
  // },
  // {
  //   name:
  //     "Python Basics",
  //   image: pythoncert,
  //   icon: hackerrank,
  //   url: 'https://www.hackerrank.com/certificates/635cc0313ed6'
  // },
];

const projects = [
  {
    name: "Resume Analyser",
    description:
      "The goal of this project is to develop a system that can analyze resumes, classify them into specific domains, and recommend additional skills to enhance the candidate's profile. The system will leverage logistic regression for classification tasks ",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "resume_screening",
        color: "pink-text-gradient",
      },
    ],
    image: resumeAnalysis,
    source_code_link: "https://github.com/susil-123/Resume-Analyser",
  },
  {
    name: "Movie Recommendation",
    description:
      "In this mini project, i've developed a movie recommendation system using Flask. This system suggests movies based on user preferences and employs collaborative filtering techniques for personalized recommendations. Explore a curated list of movies tailored just for you, and discover new favorites based on your interests.",
    tags: [
      {
        name: "movie-recommendation",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
    ],
    image: movieRecommendation,
    source_code_link: "https://github.com/susil-123/Movie-Recommendation-using-Flask",
  },
  {
    name: "Students Performance Prediction",
    description:
      "The Student Performance Measurement System is designed to assess and predict the performance of students based on various academic and non-academic factors.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Regression",
        color: "pink-text-gradient",
      },
    ],
    image: studentsPerformance,
    source_code_link: "https://github.com/susil-123/end_to_end_students_performance_prediction",  
  },
];

export { services, technologies, experiences, certifications, projects };