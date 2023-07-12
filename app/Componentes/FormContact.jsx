import { useState } from "react"


const FormContact = (props) => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        //validaciones:
        if(!form.name || !form.email || !form.message){
            alert('Todos los campos son obligatorios')
            return
        }

        if(!form.email.includes('@')){
            alert('El email no es válido')
            return
        }

        //validaciones extra
        if(form.name.length < 3){
            alert('El nombre debe tener al menos 3 caracteres')
            return
        }




        console.log(form)
    }

//estilos con tailwind
  return (
    <>
        <form className="bg-smoke-900 bg-opacity-70 p-4 rounded-md" {...props} onSubmit={handleSubmit} 
        >
            <div className="mb-4 flex gap-2">
            <div >
                <label className="block text-slate-200 text-sm font-normal mb-2" htmlFor="name">
                    Nombre
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-smoke-600 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    onChange={handleChange}
                    value={form.name}
                />
            </div>
            <div >
                <label className="block text-slate-200 text-sm font-normal mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-smoke-600 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                />
            </div>

            </div>

            <div className="mb-1">
                <label className="block text-slate-200 text-sm font-normal mb-2" htmlFor="message">
                    Mensaje
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-smoke-600 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                    id="message"
                    placeholder="Mensaje"
                    name="message"
                    onChange={handleChange}
                    value={form.message}
                ></textarea>
            </div>
            <div className="flex justify-center">
                <button className="btn-contact w-full text-center items-center justify-center" type="submit">
                    Enviar
                </button>
            </div>


        </form>
    
    </>
  )
}

export default FormContact