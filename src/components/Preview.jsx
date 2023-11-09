import { useState, useEffect } from 'react';
import Proyects from './Proyects';
import "./preview.css"

function Preview() {
    const [data, setPreviewData] = useState([]);
    const [currentView, setCurrentView] = useState('responsive');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://my-json-server.typicode.com/cattCelium/api-1/proyectPreview');
                if (response.ok) {
                    const jsonData = await response.json();
                    setPreviewData(jsonData);
                } else {
                    throw new Error('Error al cargar los datos de la API');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

  
    const number = data[currentView] ? data[currentView].length : 0;

    const changeView = (vista) => {
        setCurrentView(vista);
    };

    return (
        <>
        <Proyects number={number} changeView={changeView} />
        <section className="main__preview"> {}
            
            {data[currentView] && data[currentView].map((info,index) => ( 
                <article key={index} className="preview">
                    <div className="preview__frame">
                        <div className="preview__frame__clippingMask">
                            <img src="./proyecto.png" alt="vista previa del proyecto" className="preview__frame__clippingMask__img" />
                        </div>
                    </div>
                    <section className="preview__frame__text">
                        <div className="preview__frame__title">
                            <span className="preview__frame__hashtags">#HTML #CSS #responsive</span> {}
                            <h4>{info.title}</h4>
                        </div>

                        <p className="preview__frame__p">
                            In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
                        </p>

                        <nav className="preview__frame__nav">
                            <a href="" className="preview__frame__nav__btn">Demo</a> {}
                            <a href="" className="preview__frame__nav__btn">Code</a> {}
                        </nav>
                    </section>
                </article>
            ))}
        </section>
        </>
    );
}

export default Preview;
