import { meta, pp, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skillsTech = [
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },

    
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Frontend Intern",
        company_name: "Hits Solution Pvt Limited",
        icon: pp,
        iconBg: "#FAC800",
        date: "April 2023 - June 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Worked on core architectural level changes and made features like Draft.",
            "Leveraged expertise in FlutterFlow's widget library to customize UI components and streamline user interactions, contributing to an efficient frontend architecture",
        ],
    },
   
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: ' Know Your Country',
        // description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        points: [
            "Developed an interactive web application to explore country details such as ﬂag, capital, region, and currency using the REST Countries API.",
            "Utilized asynchronous data fetching with async/await to eﬃciently handle HTTP requests and JSON responses.",
            "Displayed default countries on initial load and enabled dynamic search functionality.",
            "Tech-Stack used : JavaScript (ES6+), HTML, CSS, REST APIs, HTTP, JSON ",
        ],
        link: 'https://github.com/ABHAYM69/KnowYourCountry',
        githubLink: 'https://github.com/ABHAYM69/KnowYourCountry',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-red',
        name: 'React E-Commerce Store ',
        // description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        points: [
            "Built a fully responsive e-commerce web application with dynamic product listings, category filtering, cart management, and checkout ﬂows.",
           "Improved user experience by optimizing component rendering and ensuring smooth navigation across pages.",
           "Consumed external RESTful APIs using asynchronous JavaScript and JSON handling.",
           "Tech Stack Used : React.js, JavaScript (ES6+), HTML , CSS",
        ],
        link: 'https://github.com/ABHAYM69/ECommeerce',
        githubLink: 'https://github.com/ABHAYM69/ECommeerce',
    },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    //     githubLink: 'https://github.com/adrianhajdin/pricewise',
    // },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    //     githubLink: 'https://github.com/adrianhajdin/pricewise',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    //     githubLink: 'https://github.com/adrianhajdin/pricewise',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    //     githubLink: 'https://github.com/adrianhajdin/pricewise',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    //     githubLink: 'https://github.com/adrianhajdin/pricewise',
    // }
];