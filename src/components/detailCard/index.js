import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";

function DetailCard({id, name, surname, age, job, avatar}) {
  return (
    <div className={ styles.card}>
      <div className="card-body">
        <img className={styles.img} src={avatar} width="200" height="200"></img>
        <h3>Id:{id}</h3>
        <hr></hr>
        <h5 className="card-title">{name} - {surname}</h5>
        <h6>{age} / {job}</h6>
      </div>
    </div>

  );
}
export default DetailCard;
