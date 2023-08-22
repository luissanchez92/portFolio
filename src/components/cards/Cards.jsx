import imageShopConnect from '../../assets/shopConnect.png'
import cotizador from '../../assets/cotizador.png'
import videoGames from '../../assets/videoGames.png'
import porfolio from '../../assets/porfolio.png'
import Card from '../card/Card'
import style from './Cards.module.css'

const Cards = () => {
    const projects=[
        {   image: imageShopConnect,
            name: 'SHOPCONNECT',
            description: 'Desarrollar un E-commerce de zapatos que incluyo: dashboard de administrador, baneo de usuarios, pasarela de pago con mercado pago, registro manual con encriptación de clave, envió de mail, al registrarse y al hacer el pago, filtros combinados, carrito de compra, guardar en favoritos, sección de usuarios donde visualizaban las compras y calificaban el producto.',
            technologies: 'React, Redux, Axios, Node, Sequelize, PostgreSQL',
            repo: 'https://github.com/luissanchez92/frontSC',
            vista: 'https://shopconnectt.onrender.com/'
        },
        {   image: cotizador,
            name: 'COTIZADOR DE CRIPTOMONEDAS',
            description: 'Aplicación diseñada para mantenerte al tanto de las 20 criptomonedas más influyentes a nivel mundial. Desarrollada con React y estilizada con la potencia de Styled Components, esta aplicación te brinda la capacidad de explorar y monitorear las principales criptomonedas en tiempo real.',
            technologies: 'React, Fetch',
            repo: 'https://github.com/luissanchez92/CryptocurrencyQuoter',
            vista: 'https://cryptocurrencyljsj.netlify.app/'
        },
        {
            image: videoGames,
            name: 'PI-VideoGames',
            description: 'PI-VideoGames fue un proyecto individual durante la etapa del bootcamp que consistia en desarrollar una Single Page Application, que consistia en consumir y renderizar la informacion en de una API, incluye filtrados combinados, ordenamientos, creación de nuevos videojuegos con formulario controlado. ',
            technologies: 'React, Axios, Node, Sequelize, PostgreSQL',
            repo: 'https://github.com/luissanchez92/PI-VideoGames',
            vista: ''
        },
        {
            image: porfolio,
            name: 'Mi Portfolio',
            description: 'Explora mis habilidades y proyectos destacados. Use la integración de emailjs para que puedas contactarme fácilmente, completando el formulario desbloquearas el boton de envio. Espero conectarnos pronto.',
            technologies: 'React',
            repo: 'https://github.com/luissanchez92/portFolio',
            vista: ''
        }
    ]
    return (
        <div className={style.divContainer}>
            {projects.map((element, index) => (
                <Card
                    key={index}
                    image={element.image}
                    name={element.name}
                    tecnologias={element.technologies} 
                    descripcion={element.description} 
                    repo={element.repo} 
                    vista={element.vista}
                />
            ))}
        </div>
    );
}

export default Cards
