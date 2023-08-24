import style from './Font.module.css'
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineDownload} from 'react-icons/ai'
import cv from '../../assets/cvljsj.pdf'
import photo from '../../assets/2xbrus.jpg'

const Font = () => {
  return (
    <div className={style.divContainer}>
        <div className={style.divProps}>
            <h1 className={style.h1}>Hola. Soy</h1>
            <h2 className={style.h2}>LUIS SÁNCHEZ</h2>
            <h4 className={style.h4}>Desarrollador FullStack</h4>
            <h4 className={style.h4}>Buenos Aires-Argentina</h4>
            <a href='https://www.linkedin.com/in/ljsj/'><AiFillLinkedin className={style.a}/></a>
            <a href='https://github.com/luissanchez92'><AiFillGithub className={style.a}/></a>
            <br></br>
            <button className={style.buttonCv}><a href={cv} className={style.cv} download>Descargar CV   <AiOutlineDownload className={style.iconDownload}/></a></button>
        </div>
        <img src={photo} className={style.img}/>
    </div>

  )
}

export default Font
