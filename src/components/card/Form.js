import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";
import { useUsers } from "../../context/Users";
import axios from "axios";

const Form = ({ id, name,surname, age, job, editUser }) => {
  const{users,setUsers} = useUsers();

  const postFunct = (e) => {
    e.preventDefault();
    const data = {
      "id": id,
      "name": e.target[0].value,
      "surname": e.target[1].value,
      "age": e.target[2].value,
      "job": e.target[3].value
    };
    editUser(data);
    
  };
  return (
    <form className={styles.form} onSubmit={postFunct}>
      <label for="Name">Name</label>
      <input
        type="Name"
        defaultValue={name}
        class="form-control"
        id="Name"
        placeholder="Name"
      ></input>

      <label for="Surname">Surname</label>
      <input
        type="Surname"
        defaultValue={surname}
        class="form-control"
        id="Surname"
        placeholder="Surname"
      ></input>

      <label for="Age">Age</label>
      <input type="Age" class="form-control" id="Age" defaultValue={age} placeholder="Age"></input>

      <label for="Job">Job</label>
      <input type="Job" class="form-control" id="Job" defaultValue={job}  placeholder="Job"></input>

      <button className={styles.formButton+" form-control"}>Edit</button>
    </form>
  );
};
export default Form;
