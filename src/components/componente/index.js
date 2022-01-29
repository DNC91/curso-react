import React from "react";
import axios from "axios"
import ListElement from "./listElement/index";
import Form from "../form";

const Componente = props => {

    const url = "https://jsonplaceholder.typicode.com/posts"

    const frutas = ["banana", 321321, false, true, 412, {title: "title 1", body: "lorem ipsum"}]
    
    console.log(frutas.length)
    const getData = async() => {

        const res = await axios.get(url);
        props.setPosts(res.data);
    }
    
    if(props.posts.length === 0){
        return (
            <div>
                <h1>No hay tareas</h1>
                <button onClick={getData} >Obtener tareas</button>
                <Form setPosts={props.setPosts} posts={props.posts}/>
            </div>
        )
    }

    return (
        <div>
            <Form setPosts={props.setPosts} posts={props.posts}/>
            <button onClick={() => props.setPosts([])}>Limpiar tareas</button>
         <ul>
             {props.posts.map((data, i)=>{
               return <ListElement key={i} data={data}/>
             } )}
         </ul>

        </div>
    );
};

export default Componente;
