import style from './Home.module.css'
import Cards from '../components/cards/Cards';
import certificate from '../assets/certifcado.png'
import Malier from '../components/form/Malier';
import Tech from '../components/tech/Tech';
import Soft from '../components/soft/Soft';
import Footer from '../components/footer/Footer';
import Font from '../components/font/Font';



export const Home = () => {
  return (
    <>
        <div className={style.divFather}>
            <Font/>
            <hr className={style.hr}/>
            <h2 className={style.h2}>SOBRE MI</h2>
            <p className={style.p}> Hola, soy Luis Sánchez. Anteriormente estudié imagenología en la escuela de tecnología médica, ejercí como técnico en Resonancia Magnética y Tomografía Computarizada 3D durante más de 5 años. La curiosidad por la tecnología y el mundo digital despertó en mí un fuerte interés que me impulsó a seguir estudiando. En mi transición hacia el desarrollo web, he tenido la oportunidad de comprender algunos lenguajes de programación y la evolución de los avances tecnológicos que impactan en todos los ámbitos de nuestras vidas. Además, he adquirido experiencia práctica en esta emocionante disciplina. Ahora, mi objetivo es continuar creciendo y desarrollando mis habilidades para contribuir a crear soluciones digitales innovadoras.</p>
            <hr className={style.hr}/>
            <h2 className={style.h2}>SOFT SKILLS</h2>
            <p className={style.p}>Soy una persona con un enfoque centrado en la responsabilidad, curiosidad y la colaboración. Mi pensamiento lógico y planificación estratégica me permiten abordar desafíos con eficacia, mientras que mi pasión por la innovación me impulsa a encontrar soluciones creativas. Tengo la habilidad para trabajar en equipo y mantener una actitud positiva lo que fortalece mi capacidad para contribuir significativamente a proyectos conjuntos. Siempre estoy dispuesto a aprender y adaptarme, lo que me permite prosperar en entornos cambiantes.</p>
            <Soft/>
            <hr className={style.hr}/>
            <h2 className={style.h2}>TECH SKILLS</h2>
            <Tech/>
            <hr className={style.hr}/>
            <h2 className={style.h2}>PROYECTOS</h2>
            <Cards/>
            <hr className={style.hr}/>
            <h2 className={style.h2}>CERTIFICADO</h2>
            <div className={style.divContainerCerteficado}>
                <img src={certificate} className={style.imgCertficado}></img>
            </div>
            <hr className={style.hr}/>
            <h2 className={style.h2}>CONTÁCTAME</h2>
            <Malier/>
            <hr className={style.hr}/>
            <Footer/>

        </div>
        
    </>
  )
}



