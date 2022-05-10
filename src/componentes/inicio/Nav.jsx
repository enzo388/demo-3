import React, { useRef } from 'react';
import { useScrollBy } from "react-use-window-scroll";
import Button from '@mui/material/Button';
import "../inicio/Nav.css"
import Link from "@mui/material/Link";
import logo from "../../images/logo2022.png"
/* import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll' */
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Nav = () => {

    const scrollBy = useScrollBy();

    window.__forceSmoothScrollPolyfill__ = true;
    return (

        <div className="appbar" >
            <img src={logo} alt="logo" className="logo" />

            <div className="container-botons-nav">
                <Button className="btn1"  >
                   {/*  <Link className="btn1" href="https://wa.me/5492213554594?text=Hola%20Enzo%20Vazquez,%20me%20comunico%20con%20usted%20porque%20me%20interesó%20su%20perfil.%20Hazme%20saber%20en%20que%20horario%20lo%20puedo%20contactar.%20Muchas%20gracias.%20" target="_blank"> */}
                        {/* <h4 className="btn1"> Productos</h4> */}
                   {/*  </Link> */}
                   <AnchorLink offset='50' href='#productos'> <h4 className="btn1">Servicios</h4></AnchorLink>
                </Button>

         
              






                <Button className="btn1">
                <AnchorLink offset='50' href='#productos'> <h4 className="btn1">Nosotros</h4></AnchorLink>
                </Button>

            
                <Button className="btn1" >
                    <Link href='mailto:enzo.vazquez.388@gmail.com' color='inherit'>
                        <h4 className="btn1">Contacto</h4>
                    </Link>
                </Button>
            </div>

        </div>

    );
};
export default Nav;