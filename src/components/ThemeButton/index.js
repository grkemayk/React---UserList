import React from 'react'
import { useTheme } from "../../context/ThemeContext";
import styles from "./styles.module.css";
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";


const ThemeButton=({themeCondition})=>{

  console.log(themeCondition)
  const checkedInitialize = (themeCondition == "light" ? false : true)
  console.log(checkedInitialize)
 
  const {theme, setTheme } = useTheme();
  return (
  
      <div className="switch_box box_3">
        <input defaultChecked={checkedInitialize} class="toggle" type="checkbox" onChange={()=> setTheme(theme === "light" ? "dark" : "light")}/>
      </div>		
  )
}
export default ThemeButton;
