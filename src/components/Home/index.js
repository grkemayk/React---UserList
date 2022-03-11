import styles from "./styles.module.css";
import { useState} from "react";
import DetailCard from "../detailCard";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "../Theme.css"
import { useTheme } from "../../context/ThemeContext"


export default function Home() {

  const {theme, setTheme } = useTheme();
  const [getUser,setGetUser] = useState(false);
  const [warning,setWarning] = useState(false);
  const submit=(e)=>
  {
    e.preventDefault();
    if(e.target[0].value === "")
    {
      setGetUser(false)
    }
    else
    {
      axios.get("http://localhost:3000/posts?name="+e.target[0].value)
      .then(res=>{
        if(res.data.length !== 0)
        {
          setGetUser(res.data[0])
          setWarning(false);
        }
        else
        {
          setGetUser(false)
          setWarning(true);
          setTimeout(()=>{
            setWarning(false);
          },2000)
        }
      })
    }   
  }
  return (
    <div>
      <div className={styles.home+` ${theme}`}>
        <div>
          <h2 className={styles.alignCenter}>Find Random User</h2>
        </div>
        <form onSubmit={submit} className={styles.center}>
          <div className={"form-group "+styles.formGroup}>
            <input
              type="text"
              className={"form-control "+styles.width}  
              id="exampleInputName"
              placeholder="User Name"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your searching history.
            </small>
            <br></br>
            <button type="submit" className={"btn btn-primary "+styles.submitButton}>
            Search
          </button>
          {warning && <div className="alert alert-danger" styles={"margin: 10px;"}><strong>Danger!</strong> Wrong user name !</div>}
          {getUser && <DetailCard id={getUser.id} name={getUser.name} surname={getUser.surname} age={getUser.age} job={getUser.job} setUser={setGetUser}/> }
          </div>
        </form>

      </div>
    </div>
  );
}
