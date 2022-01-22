import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Componente = props => {

    const [userList, setUserList] = useState([]);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
    const onEnviarFormulario = (data) => {

        console.log(data)
        setUserList([...userList, data]);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onEnviarFormulario)}>
                <input type="text" placeholder="Nomber" {...register("firstName")}/>
                <input type="text" placeholder="Apellido"{...register("lastName")}/>
                <input type="text" placeholder="Nombre de mascota"{...register("petName")}/>
                <button type="submit" >Enviar</button>
            </form>
         <ol>
             {userList.map((data, i)=>{
               return <li key={i} > {`${data.firstName} ${data.lastName} ${data.petName}`} </li>
             } )}
         </ol>
        </div>
    );
};

export default Componente;
