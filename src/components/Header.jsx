import { useState, useEffect } from 'react';
import "./header.css"

function Header(){
    const [data, setPerfilData]=useState([]);
      
  
  useEffect(()=>{
      async function ObtenerCargarDatos(){
          try {
              const respuesta = await fetch("https://my-json-server.typicode.com/cattCelium/api-1/profile");
              if (!respuesta.ok) {
                  throw new Error("No se puedo recuperar los datos")
              }
              const datos = await respuesta.json();
              setPerfilData(datos)
          }
          catch (error) {
              console.log(error)
          }
          
      }
      ObtenerCargarDatos()
  },[]) 
  console.log(data)
      return(
        <header className="header">
        <section className="header__frameInfo">

        <div className="header__frameInfo__clippingMask">
            <img src='./profile.jfif' alt="foto de perfil" className="header__frameInfo__clippingMask__profileImg"/>
        </div>

        <div className="header__frameInfo__contact">
            <h1>{data.name}</h1>
            <h2>{data.profession}</h2>
        </div>
    

        <div className="header__frameInfo__contact">
            <img src="./envelope.png" alt="icono de correo"/>
            <span className="header__contact__mail">{data.mail}</span> <br/>
            <img src="./phone.png" alt="icono de teléfono"/>
            <span>{data.phone}</span>
        </div>

        <p className="header__frameInfo__tx">{data.descrption}</p>

    </section>
    </header>
          )
  }
export default Header