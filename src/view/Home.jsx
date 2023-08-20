import photo from '../assets/2xbrus.jpg'
import style from './Home.module.css'
import cv from '../../public/cvljsj.pdf'
import { PiFileHtmlBold } from 'react-icons/Pi';
import {  SiJavascript} from 'react-icons/Si';
import {  LiaReact} from 'react-icons/Lia';
import {  TbBrandRedux} from 'react-icons/Tb';
import {  FaNode} from 'react-icons/Fa';
import {  SiExpress} from 'react-icons/Si';
import {  SiSequelize} from 'react-icons/Si';
import {  BiLogoPostgresql} from 'react-icons/Bi';
import {  SiMysql} from 'react-icons/Si';
import {  SiVisualstudio} from 'react-icons/Si';
import {  AiFillGithub} from 'react-icons/Ai';
import {  BiGitBranch} from 'react-icons/Bi';
import { AiFillLinkedin } from 'react-icons/Ai';
import Cards from '../components/Cards';
import certificate from '../assets/certifcado.png'
import Malier from '../components/Malier';
import {AiOutlineDownload} from 'react-icons/Ai'



export const Home = () => {
  return (
    <>
        <div className={style.divFather}>
            <div className={style.divContainer}>
                <div>
                    <h1 className={style.h1}>Hola. Soy</h1>
                    <h2 className={style.h2}>LUIS SANCHEZ</h2>
                    <h4 className={style.h4}>Desarrollador FullStack</h4>
                    <h4 className={style.h4}>Buenos Aires-Argentina</h4>
                    <a href='https://www.linkedin.com/in/ljsj/'><AiFillLinkedin className={style.a}/></a>
                    <a href='https://github.com/luissanchez92'><AiFillGithub className={style.a}/></a>
                    <br></br>
                    <button className={style.buttonCv}><a href={cv} className={style.cv} download>Descargar CV   <AiOutlineDownload/></a></button>
                </div>
                <img src={photo} className={style.img}/>
            </div>
            <hr className={style.hr}/>
            <h2 className={style.h2}>SOBRE MI</h2>
            <p className={style.p}>Hola, soy Luis Sánchez. Anteriormente estudié imagenología en la escuela de tecnología médica y ejercí como técnico en Resonancia Magnética y Tomografía Computarizada durante más de 5 años. La curiosidad por la tecnología y el mundo digital despertó en mí un fuerte interés que me impulsó a seguir estudiando. En mi transición hacia el desarrollo web, he tenido la oportunidad de comprender algunos lenguajes de programación y la evolución de los avances tecnológicos que impactan en todos los ámbitos de nuestras vidas. Además, he adquirido experiencia práctica en esta emocionante disciplina. Ahora, mi objetivo es continuar creciendo y desarrollando mis habilidades para contribuir a crear soluciones digitales innovadoras.</p>
            <hr className={style.hr}/>
            <h2 className={style.h2}>SOFT SKILLS</h2>
            <p className={style.p}>Soy un profesional con un enfoque centrado en la responsabilidad, la curiosidad y la colaboración. Mi pensamiento lógico y planificación estratégica me permiten abordar desafíos con eficacia, mientras que mi pasión por la innovación me impulsa a encontrar soluciones creativas. Mi habilidad para trabajar en equipo y mantener una actitud positiva fortalece mi capacidad para contribuir significativamente a proyectos conjuntos. Siempre estoy dispuesto a aprender y adaptarme, lo que me permite prosperar en entornos cambiantes.</p>
            <div className={style.divContailerUl}>
                <ul className={style.ulList}>
                    <li className={style.li}>✅Responsabilidad</li>
                    <li className={style.li}>✅Curiosidad</li>
                    <li className={style.li}>✅Colaboracion</li>
                    <li className={style.li}>✅Pensamiento Logico</li>
                    <li className={style.li}>✅Planificacion</li>
                    <li className={style.li}>✅Innovacion</li>
                    <li className={style.li}>✅Trabajo en equipo</li>
                    <li className={style.li}>✅Positividad</li>
                    <li className={style.li}>✅Voluntad de Aprender</li>
                    <li className={style.li}>✅Resolucion de Problemas</li>
                </ul>
            </div>
            <hr className={style.hr}/>
            <h2 className={style.h2}>TECH SKILLS</h2>
            <div>
                <p className={style.p}>Conociminetos en : HTML5, CSS, JavaScript, ES6, React, Redux, Node.js, Express, Sequelize, PostgreSQL, MySQL, Visual Studio Code, GitHub, Git.</p>
                <div className={style.divContainerIcons}>
                    <h4><PiFileHtmlBold className={style.h4icons}/></h4>
                    <h4><SiJavascript className={style.h4icons}/></h4>
                    <h4><LiaReact className={style.h4icons}/></h4>
                    <h4><TbBrandRedux className={style.h4icons}/></h4>
                    <h4><FaNode className={style.h4icons}/></h4>
                    <h4><SiExpress className={style.h4icons}/></h4>
                    <h4><SiSequelize className={style.h4icons}/></h4>
                    <h4><BiLogoPostgresql className={style.h4icons}/></h4>
                    <h4><SiMysql className={style.h4icons}/></h4>
                    <h4><SiVisualstudio className={style.h4icons}/></h4>
                    <h4><AiFillGithub className={style.h4icons}/></h4>
                    <h4><BiGitBranch className={style.h4icons}/></h4>
                </div>

            </div>
            <hr className={style.hr}/>
            <h2 className={style.h2}>PROYECTOS</h2>
            <div>
                <Cards/>
            </div>
            <hr className={style.hr}/>
            <h2 className={style.h2}>CERTIFICADO</h2>
            <div className={style.divContainerCerteficado}>
                <img src={certificate} className={style.imgCertficado}></img>
            </div>
            <hr className={style.hr}/>
            <h2 className={style.h2}>CONTACTAME</h2>
            <Malier/>
            <hr className={style.hr}/>
            <div>
                <a href='https://www.linkedin.com/in/ljsj/' className={style.linkGit}><AiFillLinkedin className={style.h4icons}/></a>
                <a href='https://github.com/luissanchez92'><AiFillGithub className={style.h4icons}/></a>
                <h5>Luis Sanchez -2023- </h5>
            </div>
        </div>
        
    </>
  )
}



