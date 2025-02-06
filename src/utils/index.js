import { clsx } from "clsx"
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function navgationCheck(path,itemPath){
  const pathElement = path.split("/")[1];
  // confirm.log(pathElement);
  // console.log(pathElement);
  // console.log(itemPath);
  if(pathElement === itemPath.slice(1,)){
    return true;
  }
  return false;
}

export function navgationCheckSubRoute(path,itemPath){
const pathElement = path.replace(/^\/+|\/+$/g, "");
const itemPathElement = itemPath.replace(/^\/+|\/+$/g, "");
if(pathElement === itemPathElement){
  return true;
}
return false;
}