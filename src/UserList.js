import React, { useState, useEffect } from "react";

const UserList = () => {
  // Creamos un estado para almacenar los datos de los usuarios
  const [users, setUsers] = useState([]);
  // Creamos un estado para manejar si hay un error o si los datos están cargando
  const [loading, setLoading] = useState(true);

  // useEffect se ejecuta cuando el componente se carga por primera vez
  useEffect(() => {
    // Hacemos una petición a la API para obtener la lista de usuarios
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // Convertimos la respuesta en un objeto JSON
      .then((data) => {
        setUsers(data); // Guardamos los datos en el estado
        setLoading(false); // Cambiamos el estado de loading a false
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
        setLoading(false); // Cambiamos el estado de loading a false si hay un error
      });
  }, []); // El array vacío hace que useEffect se ejecute solo una vez cuando el componente se carga

  // Mostramos un mensaje de carga mientras esperamos los datos
  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li> // Mostramos el nombre y el correo del usuario
        ))}
      </ul>
    </div>
  );
};

export default UserList;
