import {  AiFillGithub} from 'react-icons/Ai';
import { AiFillLinkedin } from 'react-icons/Ai';
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div>
        <a href='https://www.linkedin.com/in/ljsj/'><AiFillLinkedin className={style.h4icons}/></a>
        <a href='https://github.com/luissanchez92'><AiFillGithub className={style.h4icons}/></a>
        <h5>Luis Sanchez -2023- </h5>
    </div>
  )
}

export default Footer
