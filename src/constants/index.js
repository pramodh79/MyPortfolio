import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    //java,
    nodejs,
    mongodb,
    git,
    docker,
    //jenkins,
    //sql,
    //automation,
    //python,
    creator,

  } from "../assets";
  
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Automation",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "cloud technologies",
      icon: creator,
    },
  ];
  
  const technologies = [
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
    // {
    //   name: "Java",
    //   icon: java,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Jenkins",
    //   icon: jenkins,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "Linux",
    //   icon: linux,
    // },
    {
      name: "docker",
      icon: docker,
    },
    // {
    //   name: "Python",
    //   icon: python,
    // },
    // {
    //   name: "SQL",
    //   icon: sql,
    // },
    // {
    //  name: "Automation",
    //  icon: automation
    // }
  ];
  
  const experiences = [
    {
      title: "Oklahoma City University",
      company_name: "Master's in computer science",
      icon: "Rupeek",
      iconBg: "#383E56",
      date: "Jan 2022 - Dec 2024",
      points: [
        "Currently pursuing a Master's degree in Computer Science, focusing on advanced topics in AI, ML, and web development.",
        "Developed predictive models using machine learning algorithms like logistic regression, decision trees, and ensemble methods.",
        "Implemented blog project responsive design and ensuring cross-browser compatibility.",
        "Participating in project expos and Presented findings and technical insights at academic conferences and workshops",
      ],
    },
    {
      title: "SWE Fellowship",
      company_name: "Headstarter",
      icon: "Headstarter",
      iconBg: "#383E56",
      date: "Jul 2023 - Sept 2024",
      points: [
        "Built 5+ Ai Projects aaps using Next.js, OpenAi , Stripe API",
        "Developed projects from design to development .",
        "Collaborated with different students buil the projects",
        "Attended hackathons and coached by Mentors",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Rupeek",
      icon: "Rupeek",
      iconBg: "#383E56",
      date: "Apr 2021 - Dec 2022",
      points: [
        "Designed and developed robust load test automation framework using Locust and Python, significantly optimizing performance testing processes.",
        "Created an automation framework for API testing with Rest Assured and Java, resulting in an 80% increase in automation coverage and a significant reduction in manual effort.",
        "Integrated automation test suites with Jenkins for seamless execution, improving efficiency and enabling timely issue identification.",
        "Played a key role in setting up and reviewing release processes, ensuring smooth and successful deployments.",
      ],
    },
    {
      title: "Associate Software engineer",
      company_name: "BMC Software",
      icon: "BMC",
      iconBg: "#E6DEDD",
      date: "Dec 2019 - Apr 2021",
      points: [
        "Developed comprehensive end-to-end testing solutions for BMC Helix Integration Service, ensuring seamless integration and functionality.",
        "Created Python scripts for REST API automation, streamlining testing processes and enhancing efficiency.",
        "IDeveloped and maintained web-based applications using HTML5, JavaScript, and Angular, integrating various frameworks and libraries such as jQuery and Bootstrap.",
        "Hosted and managed web applications on cloud platforms, including AWS, optimizing deployment and operational efficiency.",
        "Utilized Docker and Linux environments to streamline development and testing processes, optimizing resource utilization and deployment efficiency.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Multilabel Text Classification using NLP",
      description:
        "Implemented a machine learning model to classify text data into multiple categories using Natural Language Processing techniques.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "green-text-gradient",
        },
        {
          name: "Scikit-learn",
          color: "pink-text-gradient",
        },
      ],
      //image: carrent,
      source_code_link: "https://github.com/pramodh79?tab=repositories",
    },
    {
      name: "Loan Repayment Prediction",
      description:
        "Developed a predictive model to assess the likelihood of loan repayment based on various features and historical data.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "green-text-gradient",
        },
        {
          name: "Scikit-learn",
          color: "pink-text-gradient",
        },
      ],
      //image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Age and Gender Classification",
      description:
        "Built a deep learning model to predict the age and gender of individuals from images Utilized convolutional neural networks (CNNs) and transfer learning techniques with frameworks like TensorFlow and Keras for efficient model training and inference.",
      tags: [
        {
          name: "CNN",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "pink-text-gradient",
        },
        {
          name: "Scikit-learn",
          color: "pink-text-gradient",
        },
      ],
      //image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };