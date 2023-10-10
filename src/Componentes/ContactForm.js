import React from 'react'
import { useForm } from '../Hooks/useForm'
import Loader from './Loader'
import Message from './Message'
    // 3 funciones del hoock
const initialForm = {
    name: '',
    email:'',
    subject :'',
    comments: ''
}

const validationForm = (form)=>{
    let errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;


    if(!form.name.trim()){
        errors.name = "el campo 'nombre' es requerido";
    }else if(!regexName.test(form.name.trim())){
        errors.name = "el campo nombre solo acepta letras y espacio en blanco";
    }

    if(!form.email.trim()){
        errors.email = "el campo 'email' es requerido"
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "el campo email es incorrecto"
    }

    if(!form.subject.trim()){
        errors.subject =  "el campo 'subject' es requerido"
    }
    if(!form.comments.trim()){
        errors.comments = "el campo 'commentss' es requerido"
    }else if(!regexComments.test(form.comments.trim())){
        errors.comments = "el campo comentario no debe exceder los 255 caracteres"
    }


    return errors;
}

let style = {
    fontWeight: "bold",
    color: "#dc3545"
}


function ContactForm() {
    // 2 DESTRUCTURACION DEL HOOK PERSONALIZADO
    const {form,errors,loading,response,handleChange,handleBlur,handleSubmit} = useForm(initialForm,validationForm)
    // 4 CREACION DEL FORMULARIO
  return (
    <div>
        <h2>FORMULARIO DE CONTACTO</h2>
    
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='escribe tu nombre' onBlur={handleBlur} onChange={handleChange} value={form.name} required/>
            {errors.name && <p style={style}>{errors.name}</p>}
            <input type='email' name='email' placeholder='escribe tu email' onBlur={handleBlur} onChange={handleChange} value={form.email} required/>
            {errors.email && <p style={style}>{errors.email}</p>}
            <input type='text' name='subject' placeholder='asunto a tratar' onBlur={handleBlur} onChange={handleChange} value={form.subject} required/>
            {errors.subject && <p style={style}>{errors.subject}</p>}
            <textarea name='comments' cols='50' rows='5' placeholder='esscribe tus comentarios' onBlur={handleBlur} onChange={handleChange} value={form.comments} required/>
            {errors.comments && <p style={style}>{errors.comments}</p>}
            <input type='submit' value='enviar'/>
        </form>
        {loading && <Loader/>}
        {response && <Message msg="los datos an sido enviados" bgColor="#198754"/>}
    </div>
  )
}

export default ContactForm