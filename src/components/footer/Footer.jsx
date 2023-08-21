import {  AiFillGithub} from 'react-icons/Ai';
import { AiFillLinkedin } from 'react-icons/Ai';
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.divContainer}>
        <a href='https://www.linkedin.com/in/ljsj/' className={style.a}><AiFillLinkedin className={style.h4icons}/></a>
        <a href='https://github.com/luissanchez92' className={style.a}><AiFillGithub className={style.h4icons}/></a>
        <h5 className={style.h5}>Luis Sánchez -2023- </h5>
    </div>
  )
}

export default Footer
