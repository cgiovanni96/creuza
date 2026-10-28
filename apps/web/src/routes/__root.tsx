import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import mantineStyles from "@mantine/core/styles.css?url";
import styles from "../style.css?url";
export const Route=createRootRoute({head:()=>({meta:[{title:"Creuza"},{name:"viewport",content:"width=device-width, initial-scale=1"}],links:[{rel:"stylesheet",href:mantineStyles},{rel:"stylesheet",href:styles}]}),component:()=> <html lang="it"><head><HeadContent /></head><body><Outlet /><Scripts /></body></html>});
