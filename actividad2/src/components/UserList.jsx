import React, { useEffect, useState } from 'react'

export const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      
        fetchUsers();
    }, []);

    const fetchUsers = async() => {
        try {
            const response = await fetch("https://6830e4c46205ab0d6c3abc0a.mockapi.io/tareas/users");
            const data = await response.json();
            setUsers(data);
        } catch(error) {
            console.error("Error en la solicitud: ", error);
        }
    };
    
  return (
    <div>
        <h1>Lista de Usuarios</h1>    
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.email}</li>
            ))}
        </ul>
    </div>
  );
};
