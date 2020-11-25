import React, { useEffect, useState } from "react";

export default function UsersContainer(props) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await (
          await fetch("https://jsonplaceholder.typicode.com/users")
        ).json();
        setUsers(usersData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const renderUsers = () => {
    const usersToRender = users.map((user) => {
      return (
        <div key={user.id}>
          <div className="name">
            <h1>{user.name}</h1>
            <p>({user.username})</p>
          </div>
          <div className="contact">
            <h3>{user.phone}</h3>
            <h3>{user.email}</h3>
            <a href={"http://" + user.website} target="_blank" rel="noreferrer">
              {user.website}
            </a>
          </div>
          <div className="address">
            <p>
              {user.address.city} - <button>Full address</button>
            </p>
            <p>
              {user.address.suite}, {user.address.street}. {user.address.city}.{" "}
              <span>{user.address.zipcode}</span>
            </p>
          </div>
          <div className="company">
            <p>{user.company.name}</p>
          </div>
        </div>
      );
    });
    return usersToRender;
  };

  return <div className="">{renderUsers()}</div>;
}
