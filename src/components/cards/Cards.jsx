import imageShopConnect from '../../assets/shopConnect.png'
import cotizador from '../../assets/cotizador.png'
import Card from '../card/Card'
import style from './Cards.module.css'

const Cards = () => {
    const projects=[
        {   image: imageShopConnect,
            name: 'SHOPCONNECT',
            description: 'Desarrollar un E-commerce de zapatos que incluía: dashboard de administrador, baneo de usuarios, pasarela de pago con mercado pago, autenticación de terceros, registro manual con encriptación de clave, envió de mail, al registrarse y al hacer el pago, filtros combinados, carrito de compra, guardar en favoritos, persistencia de datos con local Storage, sección de usuarios donde visualizaban las compras y calificaban el producto.',
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
