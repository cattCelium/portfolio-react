import { useState, useEffect } from 'react';
import "./experience.css"

function Experience(){
    const [experienceData, setExperienceData] = useState([]);


    useEffect(() => {
        async function ObtenerCargarDatos() {
            try {
                const respuesta = await fetch("https://my-json-server.typicode.com/cattCelium/api-1/experience");
                if (!respuesta.ok) {
                    throw new Error("No se puedo recuperar los datos")
                }
                const datos = await respuesta.json();
                setExperienceData(datos)
            }
            catch (error) {
                console.log(error)
            }

        }
        ObtenerCargarDatos()
    }, [])

const experienceItems = experienceData.slice(0, 1).map((data,index) => {
    return<article key={index} className="experience__frame">
        <section className="experience__leftFrame">
            <img src='./adidas.png' alt="imagen logo adidas"/>
                <div className="experience__leftFrame__tx">
                    <span className="experience__leftFrame__date">{data.date}</span>
                    <span className="experience__leftFrame__job">{data.title}</span>
                </div>
        </section>
        <section className="experience__rightFrame">
            <p className="experience__rightFrame__tx">{data.descrption}</p>
        </section>
    </article>
})

const experienceItems2 = experienceData.slice(1, 3).map((data,index) => {
    return<article key={index} className="experience__frame2">
        <section className="experience__leftFrame">
            <img src='./adidas.png' alt="imagen logo adidas"/>
                <div className="experience__leftFrame__tx">
                    <span className="experience__leftFrame__date">{data.date}</span>
                    <span className="experience__leftFrame__job">{data.title}</span>
                </div>
        </section>
        <section className="experience__rightFrame">
            <p className="experience__rightFrame__tx">{data.descrption}</p>
        </section>
    </article>

})

return(
    <aside className="experience">
    <h3>Experiencia</h3>
    <section className="experience__frameContainer">{experienceItems}</section>
    <section className="experience__frameContainer">{experienceItems2}</section>
    </aside>
)

}


export default Experience