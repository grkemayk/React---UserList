import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useState} from "react";
import MyModal from "../card/Modal";

function Card({avatar, id, name, surname, age, job }) {
  const [show, setShow] = useState(false);  
  return (
    <div className={ styles.card }>
      <div className="card-body">
        <div>
          <MyModal id={id} name={name} surname={surname} age={age} job={job}/>
        </div>
        <div>
          <img className={styles.img} src={avatar} width="100" height="100"></img>
          <h6 className="card-title"><strong>NAME: </strong>{name}</h6>
          <h6 className="card-text"><strong>LAST NAME: </strong>{surname}</h6>
          <button className="btn btn-primary">
          <Link className="btn btn-primary" to={'/users/'+id}>Detail</Link> 
          </button>
        </div>
        
      </div>
    </div>

  );
}
export default Card;
