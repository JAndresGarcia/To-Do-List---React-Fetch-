import React, { useState } from "react"

const FormTodo = props => {
    const { handleAddItem } = props;
    const [label, setLabel] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            label
        });
        setLabel([]);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-list bg-white">
                <div className='file-input'>
                    <input
                    type="text"
                    className="text"
                    onChange={e => setLabel(e.target.value)} 
                    />
                    <button className="btn-primary" disabled={label ? "" : "disabled"}>Agregar</button>
                    </div>
            </div>
        </form>
    )
}

export default FormTodo;