import { useForm } from "react-hook-form";

const Form = () => {

    const {register, formState:{errors}, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return <div>
        <h2>Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input type="text" {...register('Nombre', { required:true })}/>
                {errors.Nombre?.type === 'required' && <p>Este campo es obligatorio.</p>}
            </div>
            <div>
                <label>Telefono</label>
                <input type="text" {...register('Telefono', { required:true })}/>
                {errors.Telefono?.type === 'required' && <p>Este campo es obligatorio.</p>}
            </div>
            <div>
                <label>Correo electrónico</label>
                <input type="text" {...register('email', { required:true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })}/>
                {errors.email?.type === 'required' && <p>Este campo es obligatorio.</p>}
                {errors.email?.type === 'pattern' && <p>Por favor, introduce una dirección de correo electrónico válida.</p>}
            </div>
            <div>
                <label>Ciudad</label>
                <select {...register('Ciudad', { required:true })}>
                    <option value="Bogotá">Bogotá</option>
                    <option value="Medellin">Medellin</option>
                    <option value="Bucaramanga">Bucaramanga</option>
                    <option value="Otra Ciudad">Otra Ciudad</option>
                    <option value="Otro País">Otro País</option>
                </select>
                {errors.Ciudad?.type === 'required' && <p>Este campo es obligatorio.</p>}
            </div>
            <div>
                <label>Idioma de interés</label>
                <select {...register('Idioma de interés', { required:true })}>
                    <option value="Inglés">Inglés</option>
                    <option value="Francés">Francés</option>
                    <option value="Otros Idiomas">Otros Idiomas</option>
                </select>
                {errors.Idiomadeinterés?.type === 'required' && <p>Este campo es obligatorio.</p>}
            </div>
            <div>
                <label>Tipo de solicitud</label>
                <select {...register('Tipo de solicitud', { required:true })}>
                    <option value="Cotización">Cotización</option>
                    <option value="Académico">Académico</option>
                    <option value="Servicio al cliente">Servicio al cliente</option>
                    <option value="Cobranzas">Cobranzas</option>
                </select>
                {errors.Tipodesolicitud?.type === 'required' && <p>Este campo es obligatorio.</p>}
            </div>
            <div>
                <label>Comentarios</label>
                <input type="text" {...register('Comentarios', { required:true })}/>
                {errors.Comentarios?.type === 'required' && <p>Este campo es obligatorio.</p>}
            </div>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
}

export default Form;