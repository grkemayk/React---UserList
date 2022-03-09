import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Card({id, name, surname }) {
  return (
    <div className={ styles.card }>
      <div className="card-body">
        <h6 className="card-title"><strong>NAME: </strong>{name}</h6>
        <h6 className="card-text"><strong>LAST NAME: </strong>{surname}</h6>
        <button className="btn btn-primary">
        <Link className="btn btn-primary" to={'/users/'+id}>Detail</Link> 
        </button>
      </div>
    </div>

  );
}
export default Card;
