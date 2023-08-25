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
    openai,
    git,
    figma,
    docker,
    infosys,
    EA,
    bluetip,
    hongfa,
    ecotrak,
    roborigger,
    copilot,
    aws,
    graphdb,
    wasteringSystem,
    investMap,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Generative AI APP Developer",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "Business Automation Engineer",
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
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "OpenAI",
      icon: openai,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Graduate Project Engineer & Vacation Control Engineer",
      company_name: "HongFa",
      icon: hongfa,
      iconBg: "#E6DEDD",
      date: "Nov 2017 - Dec 2019",
      points: [
        "🌟 Demonstrated strong project management skills, overseeing cross-functional teams and ensuring the timely and successful delivery of projects to the highest quality standards.",
        "🌟 Actively interacted with clients, building and maintaining relationships, and keeping them informed of project progress and timelines throughout the project lifecycle",
        "🌟 Utilised expertise in electronic engineering principles and design to diagnose and troubleshoot issues, ensuring the performance and reliability of electronic components, and driving business success.",
      ],
    },
    {
      title: "Electronic Engineer",
      company_name: "Electronic Assembly Pty Ltd",
      icon: EA,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - Mar 2021",
      points: [
        "🌟 Implemented stringent quality control processes and conducted thorough inspections to maintain the quality of printed circuit board (PCB) boards, resulting in consistently high-quality products.",
        "🌟 Utilised technical expertise in electronic engineering and PCB board design to diagnose and troubleshoot issues quickly, maintaining the performance and reliability of PCB boards.",

      ],
    },
    {
      title: "Vacation Full stack Developer",
      company_name: "Infosys",
      icon: infosys,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Mar 2023",
      points: [
        "👨‍💻 Conducted research and analysis on greenhouse gas (GHG) emission policies and created a comprehensive report.",
        "👨‍💻 Collaborated with a team to develop web base GHG emissions calculator. Designed the front-end interface using React, implemented back-end service using Flask, and integrated the PostgreSQL database functionality to enable efficient tracking and reporting of GHG emissions data.",
        "👨‍💻 Experience in developing projects provided a deep understanding of web application development, project management, and collaboration within a team.",
      ],
    },
    {
      title: "Business Automation Engineer",
      company_name: "Bluetip",
      icon: bluetip,
      iconBg: "#383E56",
      date: "Jul 2023 - Current",
      points: [
        "👨‍💻 Data Mining and Analysis with Python and ChatGPT: Utilize Python in conjunction with ChatGPT to scrape public information, followed by data analysis and visualization, assisting engineers in enhancing their workflow.",
        "👨‍💻 Onboarding System Development with Power Apps: Spearhead the development of an onboarding system using Power Apps, alleviating the administrative burden of repetitive tasks and ensuring data integrity.",
        "👨‍💻 Official Website Optimization (Ongoing): Collaborate in refining the company's official website, focusing on SEO enhancement to boost webpage visibility."
      ],
    },


  ];
  
  const testimonials = [
    {
      testimonial:
        "My teammate on the Roborigger project and I developed a functional web application to display data from Roborigger devices.",
      name: "Isaac Huang",
      designation: "Junior Data Scientist",
      company: "Department of the Premier and Cabinet of WA",

    },
    {
      testimonial:
        "My lecturer supervised my data warehousing project. She provided me with a lot of guidance and support during the lecture and the project.",
      name: "Prof. Wei Liu",
      designation: "Associate Professor ",
      company: "The University of Western Australia",

    },
    {
      testimonial:
        "My mentor on the Ecotrak project. We collaborated on brainstorming and developing the application.",
      name: "Haydn Silveira",
      designation: "Enterprise and Solution Architect",
      company: "Infosys",

    },
  ];
  
  const projects = [
    {
      name: "EcoTrak GHG Calculator",
      description:
        "Web-based platform that allows users to calculate and track greenhouse gas (GHG) emissions, and generate reports for internal and external use.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Git",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
      ],
      image: ecotrak,
      source_code_link: "https://github.com/RickWangPerth/CITS5506-IoT-Plant-Watering-System",
    },
    {
      name: "Roborigger Dashboard",
      description:
        "Web application that enables users to monitor Roborigger devices, and track monthly data in a report.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "green-text-gradient",
        },
        {
          name: "Django",
          color: "pink-text-gradient",
        },
      ],
      image: roborigger,
      source_code_link: "https://github.com/23270983Ke912/CITS5206_Roborigger-Dashboard",
    },
    {
      name: "Coordinators Copilot",
      description:
      "2023 WA Hackathon runner-up prize! A demo that shows how LLM and AI models will benefit the DEFS coordinators in their daily work.",
      tags: [
        {
          name: "Genetive AI",
          color: "blue-text-gradient",
        },
        {
          name: "Python - Gradio",
          color: "green-text-gradient",
        },
        {
          name: "OpenAI API",
          color: "pink-text-gradient",
        },
      ],
      image: copilot,
      source_code_link: "https://github.com/",
    },
    {
      name: "GraphDB for Atlanta",
      description:
        "Be selected for 'Project Hall of Fame'! It's a graph database project that allows users to understand the relationships between different entities in Atlanta and reveals hidden patterns.",
      tags: [
        {
          name: "Data ELT",
          color: "blue-text-gradient",
        },
        {
          name: "Data analysis",
          color: "green-text-gradient",
        },
        {
          name: "Data warehouse",
          color: "pink-text-gradient",
        },
      ],
      image: graphdb,
      source_code_link: "https://drive.google.com/drive/u/1/folders/1zRRXuiWbtYaFs7Tnxdc2SWb8Bq1cRBUk",
    },
    {
      name: "Plant Watering System",
      description:
        "An IoT application that enables users to remotely water plants, monitor their status, and auto-water when soil moisture is low.",
      tags: [
        {
          name: "IoT",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Raspberry Pi",
          color: "pink-text-gradient",
        },
      ],
      image: wasteringSystem,
      source_code_link: "https://github.com/RickWangPerth/CITS5506-IoT-Plant-Watering-System",
    },
    {
      name: "WA Invest Map",
      description:
        "Ongoing personal project! A full-stack application providing users with insightful data on each suburb in WA, assisting them in making informed decisions about property or business investments in WA suburbs.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "JWT",
          color: "green-text-gradient",
        },
        {
          name: "PostGIS & Mapbox",
          color: "pink-text-gradient",
        },
      ],
      image: investMap,
      source_code_link: "https://github.com/RickWangPerth/WAInvestMap",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  