import { useState } from "react";

export const UserForm = ({ addUser }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        const newUser = { name, email }
        addUser(newUser);
    }

    return (
        <div>
            <h2>Agregar Usuario</h2>
            <label>Nombre: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <label>Email: </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <button onClick={handleSubmit}>Agregar</button>
        </div>
    );
};