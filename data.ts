import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Services, Skill} from "./type";

import { BsCircleFill } from "react-icons/bs";
export const services: Services[] = [
{
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
    "I can build a beautiful and scalable SPA using  HTML,CSS   and React.js ",
},
{
    Icon: FaServer,
    title: "Reactjs",
    about:
    "handle state, redux, api usingTailwind  & other popular frameworks",
},
{
    Icon: AiOutlineApi,
    title: "git",
    about:
    "use github to up my project ",
},
{
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in HackerRank  and Leet Code ",
},

];
    export const languages: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "Type script",
        level: "45",
    },
    {
        Icon: BsCircleFill,
        name: "Java Script",
        level: "60",
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
        name: "Figma",
        level: "85",
    },
    {
        Icon: BsCircleFill,
        name: "redux",
        level: "45",
    },
    {
        Icon: BsCircleFill,
        name: "Api",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "Framer",
        level: "45",
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
    image_path: "/images/Screenshot (94)",
    deployed_url: "https://movie-app-red-seven.vercel.app/",
    github_url: "https://github.com/MajdIbrahem/movie_app",
    
    description:
    "Movie web app with TMDB api",
    key_techs: ["React", "TalwindCss", "Redux "],
},
        {
    id:7,
    name: "weather app",
    image_path: "/images/Screenshot (95)",
    deployed_url: "https://majdibrahem.github.io/weather_app/",
    github_url: "https://github.com/MajdIbrahem/weather_app",
    
    description:
    "Simple Ecommerce web app with cart.",
    key_techs: ["React", "TalwindCss", "Typescript"],
},


];
