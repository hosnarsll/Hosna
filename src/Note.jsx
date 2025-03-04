// src/Note.js
import React from 'react';

const Note = ({ note, onDelete, onEdit }) => {
    return (
        <div className="note">
            <p>{note.text}</p>
            <button onClick={() => onEdit(note.id)}>Edit</button>
            <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
    );
};

export default Note;