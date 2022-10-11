import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface SkillsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    icon:ReactNode,
    name:string,
    order:number,
    activeIndex:number,
    idx:number
}