import { UserForm } from "./components/UseForm";

import React, { useState } from 'react'

const App = () => {
    const [users, setUsers] = useState([]);

    const addUser = async(newUser) => {
        try {
            const response = await fetch("https://6830e4c46205ab0d6c3abc0a.mockapi.io/tareas/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            if(response.ok) {
                const data = await response.json();
                setUsers([...users, data]);
            } else {
                console.error("Error al agregar usuario");
            }
        } catch(error) {
            console.error("Error en la solicitud: ", error)
        }
    };

  return (
    <div>
        <h1>Lista de Usuarios</h1>
        <UserForm addUser={addUser}/>

        <ul>
            {users.map((user, index) => (
                <li key={index}>{user.name} - {user.email}</li>
            ))}
        </ul>
    </div>
  );
};

export default App;