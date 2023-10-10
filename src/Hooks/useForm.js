import { useState } from 'react'
import { HelpHttp } from '../Helpers/HelpHttp'

export const useForm = (initialForm,validationForm) => {
    //PRIMER PASO DECLARO VARIABLES Y FUNCIONES
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)

    const handleChange =(e)=>{
        // 5 LIGADO AL VALUE DE LOS INPUTS -  FORMULARIOS CONTROLADOS
        const {name,value} = e.target
        setForm({
            ...form,[name]:value
        })
    }
    const handleBlur =(e)=>{
        // 6 HACE UN HANDLECHANGE Y ACTUALIZA LOS ERRORES
        handleChange(e)
        setErrors(validationForm(form))

    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        setErrors(validationForm(form))

        if(Object.keys(errors).length === 0 ){
            alert("enviando formulario")
            setLoading(true)
            HelpHttp().post("https://formsubmit.co/ajax/mardcart.9@gmail.com",{
                body:form,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "Application/json"
                }
            }).then((res)=> {
                setLoading(false)
                setResponse(true)
                setForm(initialForm)
                setTimeout(() => setResponse(false), 5000);
            })
        }else{
            return
        }
    }


  return { form,errors,loading,response,handleChange,handleBlur,handleSubmit}
}
