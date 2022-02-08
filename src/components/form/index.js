import React from "react";
import { useForm } from "react-hook-form";

const Form = props => {
    const { register, handleSubmit, formState } = useForm();

    const { isValid } = formState;

    const onEnviarFormulario = data => {
        console.log(data);

        props.setPosts([data, ...props.posts]);
    };

    return (
        <form onSubmit={handleSubmit(onEnviarFormulario)}>
            <input type="text" placeholder="Titulo" {...register("title")} />
            <input
                type="text"
                placeholder="Descripcion"
                {...register("body")}
            />
            <button
                className="btn btn-danger "
                disabled={!isValid}
                type="submit"
            >
                Enviar
            </button>
        </form>
    );
};

export default Form;
