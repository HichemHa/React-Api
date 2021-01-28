import React, { useEffect, useState } from "react";
import UserCard from './component/UserCard';

function UserList() {
  const [listOfUSer, setlistOfUSer] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    function fetchlistOfUSer() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => setlistOfUSer(res))
        .catch(err => setError(err));
    }
    fetchlistOfUSer();
  }, []);
  if (error) {
    alert(error)
  }
  return (
    <div style={{ marginTop: '150px' }}>

      {listOfUSer.map((el) => (<UserCard data={el} />



      ))}


    </div>
  )
}

export default UserList;








