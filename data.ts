import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Services, Skill} from "./type";

import { BsCircleFill } from "react-icons/bs";
export const services: Services[] = [
{
    Icon: RiComputerLine,
    title: "Proficient in Front-End Development:",
    about:
    "Skilled in creating web pages from scratch using JavaScript, TypeScript, ReactJS, Next.js, andTailwind CSS ",
},
{
    Icon: FaServer,
    title: "Responsive Design Expertise: ",
    about:
    "Strong understanding of mobile-first design principles and cross-browser compatibility to ensure optimal user experience across various devices and browsers",
},
{
    Icon: AiOutlineApi,
    title: "API Integration and JSON Handling",
    about:
    "Experienced in integrating APIs and handling JSON data for dynamic web applications ",
},
{
    Icon: MdDeveloperMode,
    title: "Single-Page Applications (SPA)",
    about: "Expertise in migrating multi-page user experiences to single-page applications using ReactJS and React Router.",
},

];
    export const languages: Skill[] = [
        {
            Icon: BsCircleFill,
            name: "HTMl",
            level: "100",
        },
        {
            Icon: BsCircleFill,
            name: "CSS",
            level: "100",
        },
    {
        Icon: BsCircleFill,
        name: "Type script",
        level: "75",
    },
    {
        Icon: BsCircleFill,
        name: "Java Script",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "NextJS",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "tailwindCSS",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "React",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "Git",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "Bootstrap",
        level: "80",
    },
    ];

    export const tools: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "Communication Skills",
        level: "85",
    },
    {
        Icon: BsCircleFill,
        name: "Troubleshooting",
        level: "85",
    },
    
];
    export const myProjects: IProject[] = [
        { 
id:1,    
name: "Ecommerce",
description:
"Simple Ecommerce web app with authentication and cart.",
image_path: "/images/ecommerce.png",
deployed_url: "https://ecommerce-project-red.vercel.app/",
github_url: "https://github.com/MajdIbrahem/ecommerce_project",

key_techs: ["React", "redux", "firebase"],
},
        {
    id:2, 
name: "Crypto App",
image_path: "/images/crypto.png",
deployed_url: "https://crypto-app-ruddy-seven.vercel.app/",
github_url: "https://github.com/MajdIbrahem/Crypto-app",

description:
    "Crypto web app using with multi pages for best crypto coin and the trending coins",
key_techs: ["React", "Tailwind CSS", "Context API"],
},

        {
    id:3, 
    name: "Games-landing-page",
    image_path: "/images/game.png",
    deployed_url: "https://majdibrahem.github.io/Games-anding-page/",
    github_url: "https://majdibrahem.github.io/Games-anding-page/",
    
    description:
    "Gaming landing page. Build with html and css..",
    key_techs: [
    "HTML",
    "CSS",
    ],
},

        {
    id:4,
    name: "Todo App",
    image_path: "/images/todo.png",
    deployed_url: "https://todo-app-one-gray.vercel.app/login",
    github_url: "https://github.com/MajdIbrahem/Todo-App",
    
    description:
    "Todo app with the ability authentication system, Allow add, edit and delete todo.",
    key_techs: ["React", "sass", "redux"],
},
        {
    id:5,
    name: "simple Ecomerce",
    image_path: "/images/secom.png",
    deployed_url: "https://simple-ecommerc-app.vercel.app/",
    github_url: "https://github.com/MajdIbrahem/simple-ecommerc-app-",
    
    description:
    "Simple Ecommerce web app with cart.",
    key_techs: ["React", "TalwindCss", "API context"],
},
        {
    id:6,
    name: "Movie app",
    image_path: "/images/movies.png",
    deployed_url: "https://movie-app-red-seven.vercel.app/",
    github_url: "https://github.com/MajdIbrahem/movie_app",
    
    description:
    "Movie web app with TMDB api",
    key_techs: ["React", "TalwindCss", "Redux "],
},
        {
    id:7,
    name: "weather app",
    image_path: "/images/weather.png",
    deployed_url: "https://majdibrahem.github.io/weather_app/",
    github_url: "https://github.com/MajdIbrahem/weather_app",
    
    description:
    "Simple Ecommerce web app with cart.",
    key_techs: ["React", "TalwindCss", "Typescript"],
},
        {
    id:8,
    name: "React Admin Dashboard",
    image_path: "/images/dashbord.png",
    deployed_url: "https://dashbord-design-bay.vercel.app/",
    github_url: "https://github.com/MajdIbrahem/dashbord-design",
    
    description:
    "React Admin Dashboard",
    key_techs: ["React", "Sass"],
},
        {
    id:9,
    name: "Gyme landing page",
    image_path: "/images/gyme.png",
    deployed_url: "https://gyme-landing-page.vercel.app/",
    github_url: "https://github.com/MajdIbrahem/gyme-landingPage",
    
    description:
    "Simple react landing page.",
    key_techs: ["React", "TalwindCss", "Typescript"],
},


];
