// Import Library
import axios from "axios";
import React, { useEffect, useState } from "react";
// Import Components
import InputTodo from "../../components/InputTodo";
import ListTodo from "../../components/ListTodo";
import Navbars from "../../components/Navbars";
import 'react-pro-sidebar/dist/css/styles.css';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    // Initiate State
    const [todo, setTodo] = useState([])
    const [item, setItem] = useState({
        content: "",
        description: ""
    })
    const [edit, setEdit] = useState(false)
    const navigate = useNavigate()

    // Get API
    const getApi = () => {
        axios.get("https://api.todoist.com/rest/v1/tasks")
            .then(res => setTodo(res.data))
    }
    useEffect(() => {
        getApi()
    }, [])

    // Input Data
    const handleChange = (e) => {
        let newItem = { ...item }
        newItem[e.target.name] = e.target.value
        setItem(newItem)
    }
    // Submit Data
    const handleSubmit = (e) => {
        e.preventDefault()
        if (edit) {
            axios.post(`https://api.todoist.com/rest/v1/tasks/${item.id}`, item)
                .then(() => {
                    getApi()
                    handleClear()
                    setEdit(false)
                })
        } else {
            axios.post(`https://api.todoist.com/rest/v1/tasks/`, item)
                .then(() => {
                    getApi()
                    handleClear()
                })
        }
    }

    // Clear Data
    const handleClear = () => {
        let newItem = { ...item }
        newItem["content"] = ""
        newItem["description"] = ""
        setItem(newItem)
    }

    // Delete Data
    const handleDelete = ({ id }) => {
        axios.delete(`https://api.todoist.com/rest/v1/tasks/${id}`)
            .then(() => getApi())
    }

    // Edit Data
    const handleEdit = ({ id }) => {
        axios.get(`https://api.todoist.com/rest/v1/tasks/${id}`, item)
            .then((res) => {
                setItem(res.data)
                setEdit(true)
            })
    }

    // Go to detail
    const handleDetail = (data) => {
        navigate("/detail", {
            state: {
                content: data.content,
                description: data.description,
                id: data.id,
                url: data.url,
            }
        })
    }

    return (
        <>
            <Navbars />

            <InputTodo
                edit={edit}
                item={item}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            <ListTodo
                todo={todo}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleDetail={handleDetail}
            />
        </>
    )
}

export default HomePage

