import React from 'react'
import { useTheme } from "../../context/ThemeContext";
import styles from "./styles.module.css";
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";

const ThemeButton=()=>{
  const {theme, setTheme } = useTheme();
  return (
  
      <div className="switch_box box_3">
        <input class="toggle" type="checkbox" onChange={()=> setTheme(theme === "light" ? "dark" : "light")}/>
      </div>		
  )
}
export default ThemeButton;
