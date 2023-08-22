import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import style from './Malier.module.css'


const Malier = () => {
  const [isEmailSent, setIsEmailSent]=useState(false);
  const [isError, setIsError] = useState(false);
  const [form, setForm]=useState({
    name:'',
    email:'',
    message:''
  })

  const handlerChange=(event)=>{
    const name= event.target.name
    const value= event.target.value
    setForm({
      ...form,
      [name]:value
    })
  }

  const handlerSubmit=(event)=>{
    event.preventDefault();
    emailjs.sendForm('service_kja56jj', 'template_qhk4bvh', event.target, 'ISeFtAda3M7H47vzF')
    .then(response=>{
      console.log(response);
      setIsEmailSent(true)
      setIsError(false);
      setForm({
        name:'',
        email:'',
        message:''
      })

    })
    .catch(error=>{
      console.log(error)
      setIsEmailSent(false)
      setIsError(true);
    });
  }
  useEffect(() => {
    if (isEmailSent || isError) {
      const timeout = setTimeout(() => {
        setIsEmailSent(false);
        setIsError(false);
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [isEmailSent, isError]);

  return (

    <div className={style.divContainer}>
        <form onSubmit={handlerSubmit}>
            <label className={style.label}>Nombre</label>
            <input type="text" name='name' value={form.name} onChange={handlerChange} className={style.input}/>
            <hr className={style.hr}/>
            <label className={style.label}>Email</label>
            <input type='email' name='email' value={form.email} onChange={handlerChange} className={style.input}></input>
            <hr className={style.hr}/>
            <label className={style.label}>Mensaje</label>
            <textarea name='message' value={form.message} onChange={handlerChange} className={style.textarea}></textarea>
            <hr className={style.hr}/>
            <div className={style.divButton}>
              <button className={form.name && form.email && form.message ? `${style.button} ${style.buttonEnabled}` : `${style.button} ${style.buttonDisabled}`} disabled={!form.name  || !form.email || !form.message}>Enviar</button> 
            </div>
        </form>
        {isEmailSent && <span className={style.span}>Correo enviado con éxito.</span>}
        {isError && <span className={style.spanE}>Ocurrio un Error.</span>}
    </div>
  )
}

export default Malier
