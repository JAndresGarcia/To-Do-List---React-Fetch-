 import React, { useState, useEffect } from 'react';
 
 import TaskList from './TaskList.jsx';
 import FormTodo from './formtodo.jsx';

const Container = () => {

    const [list, setList] = useState ([]);
    const handleAddItem = addItem => {
        setList([...list, addItem]);
    };
    const urlBase="https://assets.breatheco.de/apis/fake/todos/user/"

    useEffect( async()=>{

        // fetch(urlBase + props.username)
        // .then(response=>{
        //     if(response.ok){
        //         setLabel(response.json())
        //         return response.json()
        //     }
        //     console.log(response.statusText)
        // })
        // .then(data=>setLabel(data))
        let response = await fetch(urlBase+"juliangarcia")
        response= await response.json()
        setList(response)
        console.log(response)
    },[]);

    return (
        <div>
            <FormTodo username="juliangarcia" handleAddItem={handleAddItem} />
            <TaskList list={list} setList={setList} />
        </div>
    )
}

export default Container