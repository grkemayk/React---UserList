import { Link, Outlet, Routes, Route } from "react-router-dom";
import Card from "../card";
import styles from "./styles.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import User from "../User"
import "../Theme.css"
import { useTheme } from "../../context/ThemeContext";
import { useUsers } from "../../context/Users";


const Users = () => {
  const {theme, setTheme } = useTheme();
  const{users, setUsers} = useUsers();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setUsers(res.data);
      setIsLoading(false);
      console.log(res.data)
    });
  }, []);
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className={styles.color}>
      <div className={styles.home+` ${theme}`}>
        <div>
          <h2 className={styles.alignCenter}>All User</h2>
        </div>
     
        <div className={styles.card}>
          {
          users.map((data) => (
            <Card key={data.id} id={data.id} name={data.name} surname={data.surname} age={data.age} job={data.job}></Card>      
          ))
          }
        </div>
        <br></br>
        
        <Routes>
          <Route path=":userId" element={<User />} />
        </Routes>
      </div>
    </div>
  );
};
export default Users;
