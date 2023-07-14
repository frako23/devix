import "../styles/projects.css"
import imagen from "../assets/img/projects/Captura de pantalla 2023-07-14 063214.png"

export function Projects () {
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
                            <img src={imagen} alt="Imagen grande" />
                        </div>
                        <div className="gallery-images-more">
                            <div><img src={imagen} alt="Imagen pequeña1" /></div>
                            <div><img src={imagen} alt="Imagen pequeña2" /></div>
                            <div><img src={imagen} alt="Imagen pequeña3" /></div>
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
                            <img src={imagen} alt="Imagen grande" />
                        </div>
                        <div className="gallery-images-more">
                            <div><img src={imagen} alt="Imagen pequeña1" /></div>
                            <div><img src={imagen} alt="Imagen pequeña2" /></div>
                            <div><img src={imagen} alt="Imagen pequeña3" /></div>
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
                            <img src={imagen} alt="Imagen grande" />
                        </div>
                        <div className="gallery-images-more">
                            <div><img src={imagen} alt="Imagen pequeña1" /></div>
                            <div><img src={imagen} alt="Imagen pequeña2" /></div>
                            <div><img src={imagen} alt="Imagen pequeña3" /></div>
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