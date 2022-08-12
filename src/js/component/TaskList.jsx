import React from 'react' 
import Checkbox from "./Checkbox.jsx";

const TaskList = props => {
    
    const { list, setList } = props;
    
    const onChangeStatus = e => {
        const { name, checked } = e.target; 

        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList);
    };

    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    }
    const check = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ))
    return (
        <div className='todo-list text-center bg-white'>
            {list.length>0 ? check : "No tienes pendientes"}
            {list.length>0 ? (
                    <p>
                    <button className='btn-success' onClick={onClickRemoveItem}>
                        Cumplidos
                    </button>
                    </p>
            ) : null}
        </div> 
        
    )
}

export default TaskList;