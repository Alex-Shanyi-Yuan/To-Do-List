import React from 'react'
import { useState, useEffect } from 'react';

import Form from "../components/Form"
import ToDoList from "../components/ToDoList"

function Pages( { page } ) {
    const [inputText, setInputText] = useState("");
    const [toDos, setToDos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredToDos, setFilteredToDos] = useState([]);

    //run once
    useEffect(() => {
        getLocalToDos();
    }, []);

    //update
    useEffect(() => {
        filterHandler();
        saveLocalToDos();
    },[toDos, status]);

    const filterHandler = () => {
        switch(status){
            case 'completed':
                setFilteredToDos(toDos.filter(toDo => toDo.completed === true));
                break;
            case 'uncompleted':
                setFilteredToDos(toDos.filter(toDo => toDo.completed === false));
                break;
            default:
                setFilteredToDos(toDos);
                break;
            }
    }

    const saveLocalToDos = () => {
        localStorage.setItem("toDos", JSON.stringify(toDos));
    };
    const getLocalToDos = () => {
        if (localStorage.getItem("toDos") === null) {
        localStorage.setItem("toDos", JSON.stringify([]));
        }
        else {
        let toDoLocal = JSON.parse(localStorage.getItem("toDos"));
            setToDos(toDoLocal);
        }
    }

    return (
        <div>
            <Form 
                inputText={inputText} 
                toDos={toDos} 
                setToDos={setToDos} 
                setInputText={setInputText}
                setStatus={setStatus}
                page={page}
            />
            <ToDoList 
                setToDos={setToDos} 
                toDos={toDos}
                filteredToDos={filteredToDos}
                page={page}
            />
        </div>
    )
}

export default Pages
