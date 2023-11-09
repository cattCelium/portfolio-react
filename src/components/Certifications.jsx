import { useState, useEffect } from 'react';
import "./certifications.css"

function Certifications(){
    const [certificationsData, setCertificationsData]=useState([]);
      
  
    useEffect(()=>{
        async function ObtenerCargarDatos(){
            try {
                const respuesta = await fetch("https://my-json-server.typicode.com/cattCelium/api-1/certifications");
                if (!respuesta.ok) {
                    throw new Error("No se puedo recuperar los datos")
                }
                const datos = await respuesta.json();
                setCertificationsData(datos)
            }
            catch (error) {
                console.log(error)
            }
            
        }
        ObtenerCargarDatos()
    },[]) 
  
    const certificationsItems = certificationsData.slice(0, 1).map((data,index) => {
        return <article key={index} class="certifications__container__frame">
            <section className="certifications__clippingMask">
                <img src='./certification.png' alt="certificado curso diseño 3D con Blender" className="certifications__clippingMask__img"/>
            </section>

            <section className="certificatios__info">
                <span className="certificatios__info__job">Front-end Developer</span>
                <span className="certificatios__info__date">Feb 2022 - Actualidad</span>
            </section>
        </article>
    })

    const certificationsItems2 = certificationsData.slice(1, 3).map((data,index) => {
        return <article key={index} class="certifications__container__frame2">
            <section className="certifications__clippingMask">
                <img src='./certification.png' alt="certificado curso diseño 3D con Blender" className="certifications__clippingMask__img"/>
            </section>

            <section className="certificatios__info">
                <span className="certificatios__info__job">Front-end Developer</span>
                <span className="certificatios__info__date">Feb 2022 - Actualidad</span>
            </section>
        </article>
    })

        return(
            <footer className="certifications">
            <h3>Certificados</h3>
                 <section className="certifications__container">
                    {certificationsItems}{certificationsItems2}
                    </section>
            </footer>
          )

}

export default Certifications


