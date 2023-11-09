import { useState } from 'react';
import BtnProyect from './Button.jsx'
import PropTypes from "prop-types";
import "./proyects.css"

function Proyects({number, changeView}){
    const [btnActive, setBtnActive] =useState('resposive');
    
    return(
        <section className="proyects">
        <div className="proyects__frame">
        <h3 className="proyectCountTitle">Proyectos {number}</h3>
    
        <nav className="proyects__nav">
                <BtnProyect
                   classes="proyects__nav__a"
                   title="Responsivo"
                   onClick={() => { 
                       changeView('responsive');
                       setBtnActive('responsive');
                   }}
                   active={btnActive === 'responsive'}/>
                <BtnProyect
                   classes="proyects__nav__a"
                   title="JavaScript"
                   onClick={() => { 
                       changeView('javascript');
                       setBtnActive('javascript');
                   }}
                   active={btnActive === 'javascript'}/>
                   <BtnProyect
                   classes="proyects__nav__a"
                   title="React"
                   onClick={() => { 
                       changeView('react');
                       setBtnActive('react');
                   }}
                   active={btnActive === 'react'}/>
                           
        </nav>
        </div>
    </section>
    )
    
}

Proyects.propTypes = {
    number: PropTypes.number,
    changeView: PropTypes.func.isRequired,
} 

export default Proyects
