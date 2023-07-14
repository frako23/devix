import "../styles/projects.css"
import imagen1 from "../assets/img/projects/linkedteam (1).png"
import imagen2 from "../assets/img/projects/linkedteam (2).png"
import imagen3 from "../assets/img/projects/linkedteam (3).png"
import imagen4 from "../assets/img/projects/linkedteam (4).png"
import {useState } from "react"

export function Projects () {
    const [imgToShow1, setImgToShow1] = useState(imagen1);
    const [imgToShow2, setImgToShow2] = useState(imagen2);
    const [imgToShow3, setImgToShow3] = useState(imagen3);
    const [imgToShow4, setImgToShow4] = useState(imagen4);

    return(
        <main>
            <div className="card">
            <h2>Nuestros Proyectos</h2>

            <ul>
                <li><a className="category">CRM</a></li>
                <li><a className="category">ecommerce</a></li>
                <li><a className="category">Plataforma de rifas</a></li>
            </ul>

            <div className="galleries">
                <article className="gallery">
                    <div className="gallery-images">
                        <div className="gallery-images-thumbnail">
                            <img src={imgToShow1} alt="Imagen grande" />
                        </div>
                        <div className="gallery-images-more">
                            <div
                                onClick={() => {
                                    setImgToShow1(imgToShow2);
                                    setImgToShow2(imgToShow1)}}
                            ><img src={imgToShow2}
                                alt="Imagen pequeña1" 
                                className="btn"/></div>
                            <div
                                onClick={() => {
                                    setImgToShow1(imgToShow3);
                                    setImgToShow3(imgToShow1)}}
                                    ><img src={imgToShow3}
                                        alt="Imagen pequeña2"
                                        className="btn"/></div>
                            <div
                                onClick={() => {
                                    setImgToShow1(imgToShow4);
                                    setImgToShow4(imgToShow1)}}
                                    ><img src={imgToShow4}
                                        alt="Imagen pequeña3"
                                        className="btn"/></div>
                        </div>
                    </div>
                    <div className="gallery-info">
                        <p>Linkedteam</p>
                        <small>CRM y plataforma de formación orientada a la venta de seguros</small>
                    </div>
                </article>

                <article className="gallery">
                    <div className="gallery-images">
                        <div className="gallery-images-thumbnail">
                            <img src={imgToShow1} alt="Imagen grande" />
                        </div>
                        <div className="gallery-images-more">
                            <div
                                onClick={() => {
                                    setImgToShow1(imgToShow2);
                                    setImgToShow2(imgToShow1)}}
                            ><img src={imgToShow2} alt="Imagen pequeña1" /></div>
                            <div
                                onClick={() => {
                                    setImgToShow1(imgToShow3);
                                    setImgToShow3(imgToShow1)}}><img src={imgToShow3} alt="Imagen pequeña2" /></div>
                            <div
                                onClick={() => {
                                    setImgToShow1(imgToShow4);
                                    setImgToShow4(imgToShow1)}}><img src={imgToShow4} alt="Imagen pequeña3" /></div>
                        </div>
                    </div>
                    <div className="gallery-info">
                        <p>Linkedteam</p>
                        <small>CRM y plataforma de formación orientada a la venta de seguros</small>
                    </div>
                </article>

                <article className="gallery">
                    <div className="gallery-images">
                        <div className="gallery-images-thumbnail">
                            <img src={imgToShow1} alt="Imagen grande" />
                        </div>
                        <div className="gallery-images-more">
                            <div
                                onClick={() => {
                                    setImgToShow1(imgToShow2);
                                    setImgToShow2(imgToShow1)}}
                            ><img src={imgToShow2} alt="Imagen pequeña1" /></div>
                            <div
                                onClick={() => {
                                    setImgToShow1(imgToShow3);
                                    setImgToShow3(imgToShow1)}}><img src={imgToShow3} alt="Imagen pequeña2" /></div>
                            <div
                                onClick={() => {
                                    setImgToShow1(imgToShow4);
                                    setImgToShow4(imgToShow1)}}><img src={imgToShow4} alt="Imagen pequeña3" /></div>
                        </div>
                    </div>
                    <div className="gallery-info">
                        <p>Linkedteam</p>
                        <small>CRM y plataforma de formación orientada a la venta de seguros</small>
                    </div>
                </article>

            </div>
            </div>

            
        </main>
    )
}