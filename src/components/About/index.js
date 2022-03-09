import { Link } from "react-router-dom";
import styles from "../About/styles.module.css"
import { useTheme } from "../../context/ThemeContext"
export default function About() {

  const {theme, setTheme} = useTheme();
  return (
    <div className={styles.about+` ${theme}`}>
      <div>
        <iframe className={styles.cv} src="https://www.linkedin.com/in/g%C3%B6rkem-ayka%C3%A7-315b11180/?originalSubdomain=tr" title="W3Schools Free Online Web Tutorials"></iframe>
      </div>
     
    </div>
  );
}