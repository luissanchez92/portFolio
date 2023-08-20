import {  AiFillGithub } from 'react-icons/Ai';
import { AiFillEye } from 'react-icons/Ai';

const Card = ({image, name, tecnologias, descripcion, repo, vista}) => {
  return (
    <div>
        <img src={image} alt='imagen del proyecto'/>
        <h2>Nombre: {name}</h2>
        <h2>Tecnologias: {tecnologias}</h2>
        <h2>Descripcion: {descripcion}</h2>
        <a href={repo}><AiFillGithub/></a>
        <a href={vista}><AiFillEye /></a>
    </div>
  )
}

export default Card
