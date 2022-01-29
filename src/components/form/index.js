import React from 'react';
import { useForm } from 'react-hook-form';

const Form = (props) => {

    const { register, handleSubmit, watch, formState } = useForm();

    const { isValid, errors } = formState;
  
    const onEnviarFormulario = (data) => {

        console.log(data)
        
        props.setPosts([...props.posts, data]);
    };

  return <form onSubmit={handleSubmit(onEnviarFormulario)}>
            <input type="text" placeholder="Titulo" {...register("title")}/>
            <input type="text" placeholder="Descripcion"{...register("body")}/>
            <button className="btn btn-danger " disabled={!isValid} type="submit">Enviar</button>
        </form>;
};

export default Form;
