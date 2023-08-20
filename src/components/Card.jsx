import {  AiFillGithub } from 'react-icons/Ai';
import { AiFillEye } from 'react-icons/Ai';
import style from './Card.module.css'



const Card = ({image, name, tecnologias, descripcion, repo, vista}) => {
  return (
    <div className={style.divCard}>
      <div className={style.divCardInter}>
        <img src={image} className={style.imgProject} alt='imagen del proyecto'/>
        <h2>Nombre: {name}</h2>
        <h2>Tecnologias: {tecnologias}</h2>
        <h2>Descripcion: {descripcion}</h2>
        <a href={repo}><AiFillGithub/></a>
        <a href={vista}><AiFillEye /></a>
      </div>
    </div>
  )
}

export default Card
