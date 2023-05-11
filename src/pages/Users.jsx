import axios from "axios";
import { useState, useEffect } from "react";
import { UsersIndex } from "../UsersIndex";
import { UsersShow } from "../UserShow";
import { Modal } from "../Modal"; 

export function Users () {
  const [users, setUsers] = useState([]);
  const [isUsersShowModalVisible, setIsUsersShowModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleIndexUsers = () => {
    axios.get("http://qorkd.fly.dev/users.json").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  const handleShowUser = (user) => {
    setIsUsersShowModalVisible(true);
    setCurrentUser(user);
    console.log(user);
  };

  const handleHideUser = () => {
    setIsUsersShowModalVisible(false)
  };


  useEffect(handleIndexUsers, [])

  return (
    <div className="container">
      <UsersIndex users={users} onSelectUser={handleShowUser}/>
      <Modal show={isUsersShowModalVisible} onClose={handleHideUser}>
        <UsersShow user={currentUser} />
      </Modal>
    </div>
  );
}