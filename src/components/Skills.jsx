import { useState, useEffect } from 'react';
import "./skills.css"

function Skills(){
    const [skillData, setSkillsData]=useState([]);
      
  
  useEffect(()=>{
      async function ObtenerCargarDatos(){
          try {
              const respuesta = await fetch("https://my-json-server.typicode.com/cattCelium/api-1/skills");
              if (!respuesta.ok) {
                  throw new Error("No se puedo recuperar los datos")
              }
              const datos = await respuesta.json();
              setSkillsData(datos)
          }
          catch (error) {
              console.log(error)
          }
          
      }
      ObtenerCargarDatos()
  },[]) 

  const skillItems = skillData.slice(0, 2).map((info,index) => {
    return<tr key={index}>
        <td className="skills__progress__tx">{info.title}</td>
        <td><progress value={info.progress} min="0" max="100"></progress></td>
    </tr>})
  const skillItems2 = skillData.slice(2, 4).map((info,index) => {
    return<tr key={index}>
    <td className="skills__progress__tx">{info.title}</td>
    <td><progress value={info.progress} min="0" max="100"></progress></td>
    </tr>
  })

      return(
            <section className="skills">
            <h3>Skills</h3>
            <div className="skills__progressFrame">
            <table><tbody>{skillItems}</tbody></table>
            <table><tbody>{skillItems2}</tbody></table>
            </div>
            </section>
        )
  }

export default Skills