import { useState, useEffect } from 'react'
import "./styles/App.css";
import imagen from "./assets/img/portatil-junto-tableta-telefono (1).jpg";

function App() {
  const[toggler, setToggler] = useState(false)
  const[scrollTop, setScrollTop] = useState(false)
  const[accordion1, setAccordion1] = useState(false);
  const[accordion2, setAccordion2] = useState(false);
  const[accordion3, setAccordion3] = useState(false);
  const[accordion4, setAccordion4] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () =>{
      if (window.scrollY > 100) {
        setScrollTop(true)
      }else{setScrollTop(false)}
    }) 
  }, [])
  const handleToggler = () => setToggler(!toggler)

  return (
    <>
      <header className="header">
        <nav className={!scrollTop ? "navbar" : "cng-navbar"}>
          <div className="container">
            <div className="brand-and-toggler">
              <a href="#" className="navbar-brand">
                Devix
              </a>
              <button 
                type="button" 
                className="navbar-toggler"
                onClick={handleToggler}>
              <i className={toggler ? "rotate fa-solid fa-xmark" : "rotate fa-solid fa-bars" }></i>  
              </button>
            </div>

            <div className={!toggler ? "navbar-collapse" : "navbar-expand"}>
              <ul className= "navbar-nav">
                <li className="nav-item">
                  <a href="#intro" className="nav-link">intro</a>
                </li>
                <li className="nav-item">
                  <a href="#feature" className="nav-link">feature</a>
                </li>
                <li className="nav-item">
                  <a href="#team" className="nav-link">team</a>
                </li>
                <li className="nav-item">
                  <a href="#pricing" className="nav-link">pricing</a>
                </li>
                <li className="nav-item">
                  <a href="#testimonial" className="nav-link">testimonial</a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="hero-div center container">
          <h1>Haz que tu página web impresione</h1>
          <p>La mejor manera de que personas conecten con tu marca.</p>

          <div className="hero-btns">
            <button type="button" className="btn-trans">Descubre más</button>
            <button type="button" className="btn-white">Conoce a nuestros proyectos</button>
          </div>
        </div>

      </header>
      {/* termina el header */}
      {/* comienza la sección de detalle */}
      <section className='detail'>
        <div className="container">
          <div className="row">
            <div className="detail-item">
              <span>
                <i className='fas fa-tablet-alt'></i>
              </span>
              <h2>Diseño Responsivo</h2>
              <div className="line"></div>
              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odio et fugit assumenda alias? Accusamus, iste. Rem deserunt corporis similique ipsam sint vel reiciendis eligendi!</p>
            </div>
        <div className="detail-item">
              <span>
                <i className='fab fa-html5'></i>
              </span>
              <h2>HTML5</h2>
              <div className="line"></div>
              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odio et fugit assumenda alias? Accusamus, iste. Rem deserunt corporis similique ipsam sint vel reiciendis eligendi!</p>
        </div>
        <div className="detail-item">
              <span>
                <i className='far fa-bell'></i>
              </span>
              <h2>Soporte las 24 Horas</h2>
              <div className="line"></div>
              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odio et fugit assumenda alias? Accusamus, iste. Rem deserunt corporis similique ipsam sint vel reiciendis eligendi!</p>
        </div>
          </div>
        </div>
      </section>
      {/* termina la sección de detalle */}

      {/* inicia sección de caracteristicas */}
      <section className='feature'>
        <div className="container">
          <div className="row">
            <div className="feature-left">
              <img src={imagen} alt="" />
            </div>
            <div className="feature-right">
              <div className="tittle">
                <h2>Explora el futuro</h2>
                <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corrupti provident dolor excepturi animi consequatur?</p>
              </div>
              <div className="feature-item">
                <span> <i className='fas fa-tablet-alt'></i></span>
                <div>
                  <h3>Diseno Adaptado</h3>
                  <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatibus tenetur nesciunt laborum tempore pariatur.</p>
                </div>
              </div>
              <div className="feature-item">
                <span> <i className='fas fa-clone'></i></span>
                <div>
                  <h3>Listo para la retina</h3>
                  <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatibus tenetur nesciunt laborum tempore pariatur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* termina sección de caracteristicas */}

      {/* comienza la seccion de video */}
      <section className='video'>
        <div className="container">
          <a className='center' href="">
            <i className='fas fa-play'></i>
          </a>
          <h2>Ve un video de muestra</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum esse accusantium dolore voluptates excepturi assumenda molestiae doloremque nemo ut sed!</p>
        </div>
      </section>

      {/* termina la seccion de video */}
          
      {/* comienza la seccion de equipo */}

      {/* termina la seccion de equipo*/}

      {/* comienza la seccion de preguntas frecuentes */}
      <section className='faq'>
        <div className="container">
          <div className="tittle">
            <h2>Tienes alguna duda?</h2>
            <p className='text'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="row">
            <div 
            onClick={() => setAccordion1(!accordion1)}
            className="faq-item">
              <div className="faq-head">
                <h3>Porque es importante tener presencia en internet?</h3>
                <span><i className='fas fa-plus'></i></span>
              </div>
              <div className={accordion1 ? "show-faq-content" : "faq-content"}>
                <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quo velit, facilis unde voluptates dolor sed pariatur, suscipit dolore tempore, minus dolores recusandae voluptatem saepe?</p>
                <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quo velit, facilis unde voluptates dolor sed pariatur, suscipit dolore tempore, minus dolores recusandae voluptatem saepe?</p>
              </div>
            </div>

            <div 
            onClick={() => setAccordion2(!accordion2)}
            className="faq-item">
              <div className="faq-head">
                <h3>Porque es importante tener presencia en internet?</h3>
                <span><i className='fas fa-plus'></i></span>
              </div>
              <div className={accordion2 ? "show-faq-content" : "faq-content"}>
                <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quo velit, facilis unde voluptates dolor sed pariatur, suscipit dolore tempore, minus dolores recusandae voluptatem saepe?</p>
                <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quo velit, facilis unde voluptates dolor sed pariatur, suscipit dolore tempore, minus dolores recusandae voluptatem saepe?</p>
              </div>
            </div>

            <div 
            onClick={() => setAccordion3(!accordion3)}
            className="faq-item">
              <div className="faq-head">
                <h3>Porque es importante tener presencia en internet?</h3>
                <span><i className='fas fa-plus'></i></span>
              </div>
              <div className={accordion3 ? "show-faq-content" : "faq-content"}>
                <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quo velit, facilis unde voluptates dolor sed pariatur, suscipit dolore tempore, minus dolores recusandae voluptatem saepe?</p>
                <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quo velit, facilis unde voluptates dolor sed pariatur, suscipit dolore tempore, minus dolores recusandae voluptatem saepe?</p>
              </div>
            </div>

            <div 
            onClick={() => setAccordion4(!accordion4)}
            className="faq-item">
              <div className="faq-head">
                <h3>Porque es importante tener presencia en internet?</h3>
                <span><i className='fas fa-plus'></i></span>
              </div>
              <div className={accordion4 ? "show-faq-content" : "faq-content"}>
                <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quo velit, facilis unde voluptates dolor sed pariatur, suscipit dolore tempore, minus dolores recusandae voluptatem saepe?</p>
                <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quo velit, facilis unde voluptates dolor sed pariatur, suscipit dolore tempore, minus dolores recusandae voluptatem saepe?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* termina la seccion de preguntas frecuentes */}
      </>
  );
}

export default App;
