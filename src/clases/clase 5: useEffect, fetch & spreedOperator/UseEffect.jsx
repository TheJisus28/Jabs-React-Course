import { useEffect, useState } from "react";

function UseEffect() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "https://randomuser.me/api/?results=3";
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        // Crear una lista procesada de usuarios
        const processedUsers = data.results.map((user) => ({
          id: user.id.value,
          name: user.name.first + " " + user.name.last,
          img: user.picture.large,
        }));
        // Actualizar el estado una sola vez
        setUsers(processedUsers);
      })
      .catch(() => console.log("Error"));
  }, []);

  return (
    <>
      <h1 className="font-bold text-6xl">Premiados</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <img src={user.img} alt={user.name} />
        </div>
      ))}
    </>
  );
}

export default UseEffect;
