import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Form from "./Form";
import styles from "./styles.module.css";
import { useUsers } from "../../context/Users";
import axios from "axios";


const MyModal = ({id,name,surname,age,job}) => {
  
  const{users,setUsers} = useUsers();
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  const editUser=(user)=>
  {
      axios.patch("http://localhost:3000/posts/"+user.id, user).then((res) => {  
      setUsers(users.map(element => element.id === user.id ? {...user} : element));
      toggle();
    });
  }
 
  return (
    <div className={styles.editButtonRow}>
      <button onClick={toggle} className={styles.edit}><img src="https://cdn-icons.flaticon.com/png/512/420/premium/420140.png?token=exp=1646850572~hmac=570ae317b9da71e412d4a672f16f5b7b" width="20" height="20"></img></button>
      <Modal isOpen={show} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit User</ModalHeader>
        <ModalBody>
          <Form id={id} name={name} surname={surname} age={age} job={job} editUser={editUser}/>
        </ModalBody>
        <ModalFooter>

        </ModalFooter>
      </Modal>
      
    </div>
  );
};
export default MyModal;
