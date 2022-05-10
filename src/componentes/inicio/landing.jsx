import React, { useEffect } from 'react';

import "../inicio/landing.css"


import Nav from "./Nav"
import GlassCard from "./glasscard"
import VariantCard from "./VariantCard"
import Footer from "./footer"
import Efects from "./efects"
import Vector1 from "./Vector1"
import Vector2 from "./Vector2"

function Landing() {


  return (
    <div className="Landing-Cointainer">
      {/*  <AnimatedCursor

    /> */}
      <Nav />

      <div className="cardCointainer">
        <GlassCard />

      </div>
      <Vector2 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="div-cointainer-nosotros">
        <h1>NOSOTROS</h1>
        <h2 className="text-divtexto3">Construimos y hacemos crecer empresas y organizaciones de diferentes sectores económicos e industriales, sin importar sus tamaños, de una manera eficiente, a través de las nuevas tecnologías. Nuestro enfoque es satisfacer y sobrepasar las expectativas de nuestros clientes, ayudándolos a transformarse y evolucionar digitalmente.</h2>
        <br></br>
        <br></br>
        <br></br>
        <div className="div-secundari-nosotros-row">
          <div>
            <h4>•Inteligencia de negocios (Business Intelligence)</h4>
            <h4>•Automatización de procesos</h4>
            <h4>•Gestión de proyectos</h4>
            <h4>•Fabricación y Desarrollo de Software a la medida</h4>
          </div>
          <div>
            <h4>•Strategia y Consultoría en Marketing Digital 360°</h4>
           <h4>•Diseño y Desarrollo Web (Sitios de Internet / E-commerce, etc.)</h4>
            <h4>•Social Media & Storytelling</h4>

          </div>
          <div>
            <h4>•Campañas de anuncios pagados (Google, FB, Native)</h4>
            <h4>•SEO & Analítica</h4>
            <h4>•Servicios Creativos</h4>

          </div>
        </div>



      </div>







      <Efects />

      <VariantCard />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        
      </div>
      <h1 >¡NUESTROS PRECIOS DE DESARROLLO DE SOFTWARE A MEDIDA PARA 2022!</h1>
      <br></br>
      <br></br>
      <br></br>
      <h2 >Para nuestros desarrollos a medida utilizamos metodologías ágiles. Generalmente utilizamos como unidad de medida Sprints de 80 horas.</h2>
<br></br>

<h2>Sabemos que no todos los proyectos requieren un número elevado de horas por lo que tenemos tarifas desde 1 hora de programación o consultoría</h2>
<br></br>
      <br></br>

      <div className="price-row">
          <div className="price-colum">
              <h1>1H</h1>
              <h2>$ 5000</h2>
          </div>
          <div className="price-colum">
          <h1>10H</h1>
              <h2>$ 5000/H</h2>
              <h2>$ 50000</h2>
          </div>
          <div className="price-colum">
          <h1>20H</h1>
              <h2>$ 4000/H</h2>
              <h2>$ 80000</h2>

          </div>
          <div className="price-colum">
          <h1>80H</h1>
              <h2>$ 3500/H</h2>
              <h2>$ 280000</h2>

          </div>
      </div>
      <br></br>
      <br></br>
      <h6>* Los precios no incluyen IVA</h6>
      <h6>* Las bolsas de horas se pagan por anticipado</h6>
      <h6>* A estos precios habría que añadir costes de desplazamiento y dietas de ser necesario</h6>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 >Misión,Visión y Valores </h1>
      <h2 className="texto-cointainer"> Somos una empresa innovadora con muchas soluciones que aportar a las empresas y contribuir a una progresiva mejora de sus procesos de producción y a un aumento de su eficacia y rentabilidad.

        Nuestra intención es transmitir la máxima confianza, seguridad, conocimiento, cercanía y profesionalidad en cada uno de nuestros trabajos. El motor de nuestro crecimiento es directamente proporcional al crecimiento y evolución de nuestros clientes. Esa es nuestra ilusión y nuestro compromiso en todos los proyectos que acometemos.</h2>
      <br />
      <div className="Div-texto-3">
        <h2 className="text-divtexto3">Utilizamos, gestionamos y administramos diferentes herramientas y tecnologías de vanguardia.</h2>
        <h2 className="text-divtexto3">Interpretamos y traducimos de forma eficaz las necesidades y requerimientos de las áreas usuarias para diseñar soluciones específicas.</h2>
        <h2 className="text-divtexto3">Organizamos y planificamos proyectos a través de metodologías ágiles. </h2>

      </div>

      <Vector1 />
      <Footer />
    </div>

  )
}

export default Landing;