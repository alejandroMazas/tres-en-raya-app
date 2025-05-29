import { use } from "react";
import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName)

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing((editing) => !editing);
        //Es una buena p´ractica utilizar una función de actualización basada en el estado anterior, en vez del valor !isEditing directamente 
    }

    const handleNameChange = (event) => {
        setPlayerName(event.target.value);
        //console.log(event.target.value);
        //setIsEditing(false); // Esto se puede hacer al guardar el nombre
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = "Edit";

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleNameChange} />
        //btnCaption = "Save";
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}