import { IconType } from "react-icons";
export interface Services {
    Icon: IconType;
    title: string;
    about: string;
}
export interface Skill {
    Icon: IconType;
    name: string;
    level: string;
}
export interface IProject {
    id:number
    name: string;
    description: string;
    image_path: string;
    deployed_url: string;
    github_url: string;
    key_techs: string[];
}