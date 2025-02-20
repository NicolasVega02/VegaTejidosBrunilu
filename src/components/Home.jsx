import React from 'react'
import { Card, Carousel, Image } from 'react-bootstrap'


const Home = () => {
  return (
   
     <Carousel>
          <Carousel.Item interval={1000}>
          <Image text="First slide" src="../../public/imagenes/carousel3.jpg" />
            <Carousel.Caption>
              <h1>Industria Nacional </h1>
              <h3>
                Acompañamos en todos los momentos ♥
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={100}>
            <Image text="First slide" src="../../public/imagenes/carousel1.jpg" />
            <Carousel.Caption>
              <h1>Lo mejor para tu bebe ♥</h1>
              <h3>Tejidos con amor y hilo 100% algodon</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
          <Image text="First slide" src="../../public/imagenes/carousel2.jpeg" />
            <Carousel.Caption>
              <h1>Colecciones y Mas...</h1>
              <h3>Coleccion de Among us con accesorios 🎩</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Image text="First slide" src="../../public/imagenes/carousel4.jpg" />
            <Carousel.Caption>
              <h1>Amigurumis Personalizados</h1>
              <h3>Tejidos especialmente para vos 💖</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    
  
  )
}

export default Home