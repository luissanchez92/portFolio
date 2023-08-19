import photo from '../assets/2xbrus.jpg'
import style from './Home.module.css'
import cv from '../../public/cvljsj.pdf'
import { IoLogoJavascript} from "react-icons/Io";

export const Home = () => {
  return (
    <>
        <div className={style.divContainer}>
            <div>
                <h1>Hola. Soy</h1>
                <h2>LUIS SANCHEZ</h2>
                <h4>Desarrollador FullStack</h4>
                <h4>Buenos Aires-Argentina</h4>
                <button className={style.buttonCv}><a href={cv} className={style.cv} download>Descargar CV</a></button>
            </div>
            <img src={photo} className={style.img}/>
        </div>
        <hr className={style.hr}/>
        <h2 className={style.h2}>SOBRE MI</h2>
        <p>Hola, soy Luis Sánchez. Anteriormente estudié imagenología en la escuela de tecnología médica y ejercí como técnico en Resonancia Magnética y Tomografía Computarizada durante más de 5 años. La curiosidad por la tecnología y el mundo digital despertó en mí un fuerte interés que me impulsó a seguir estudiando. En mi transición hacia el desarrollo web, he tenido la oportunidad de comprender algunos lenguajes de programación y la evolución de los avances tecnológicos que impactan en todos los ámbitos de nuestras vidas. Además, he adquirido experiencia práctica en esta emocionante disciplina. Ahora, mi objetivo es continuar creciendo y desarrollando mis habilidades para contribuir a crear soluciones digitales innovadoras.</p>
        <hr className={style.hr}/>
        <h2 className={style.h2}>SOFT SKRILLS</h2>
        <p>Soy un profesional con un enfoque centrado en la responsabilidad, la curiosidad y la colaboración. Mi pensamiento lógico y planificación estratégica me permiten abordar desafíos con eficacia, mientras que mi pasión por la innovación me impulsa a encontrar soluciones creativas. Mi habilidad para trabajar en equipo y mantener una actitud positiva fortalece mi capacidad para contribuir significativamente a proyectos conjuntos. Siempre estoy dispuesto a aprender y adaptarme, lo que me permite prosperar en entornos cambiantes.</p>
        <div>
            <ul>
                <li>Responsabilidad</li>
                <li>Curiosidad</li>
                <li>Colaboracion</li>
                <li>Pensamiento Logico</li>
                <li>Planificacion</li>
                <li>Innovacion</li>
                <li>Trabajo en equipo</li>
                <li>Positividad</li>
                <li>Voluntad de Aprender</li>
                <li>Resolucion de Problemas</li>
            </ul>
        </div>
        <hr className={style.hr}/>
        <h2 className={style.h2}>TECH SKRILLS</h2>
        <div>
            <h4><IoLogoJavascript/></h4>

        </div>
    </>
  )
}



