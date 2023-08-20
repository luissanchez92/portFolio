import emailjs from '@emailjs/browser';

const Malier = () => {
    const handlerSubmit=(event)=>{
        event.preventDefault();
        emailjs.sendForm('service_kja56jj','template_qhk4bvh', event.target, 'ISeFtAda3M7H47vzF')
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
        
    }
  return (

    <div>
        <form onSubmit={handlerSubmit}>
            <label>Nombre</label>
            <input type="text" name='name'/>
            <hr></hr>
            <label>Email</label>
            <input type='email' name='email'></input>
            <hr></hr>
            <label>Mensaje</label>
            <textarea name='message'></textarea>
            <hr></hr>
            <button>Enviar</button> 
        </form>
      
    </div>
  )
}

export default Malier
