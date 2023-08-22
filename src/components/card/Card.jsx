import {  AiFillGithub } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import style from './Card.module.css'



const Card = ({image, name, tecnologias, descripcion, repo, vista}) => {
  return (
    <div className={style.divCard}>
      <img src={image} className={style.imgProject} alt='imagen del proyecto'/>
      <h2>Nombre: {name}</h2>
      <div className={style.divIcon}>
        <a href={repo}><AiFillGithub className={style.h4icons}/></a>
        <a href={vista}><AiFillEye className={style.h4icons}/></a>
      </div>
      <h2 className={style.h2}>Tecnologias: {tecnologias}</h2>
      <p className={style.p}>Descripcion: {descripcion}</p>

    </div>
  )
}

export default Card
