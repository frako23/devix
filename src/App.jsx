import { useState, useEffect } from 'react'
import "./styles/App.css";

function App() {
  const[toggler, setToggler] = useState(false)
  const[scrollTop, setScrollTop] = useState(false)

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
              <i className={toggler ? "rotate fa-solid fa-x" : "rotate fa-solid fa-bars" }></i>  
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
    </>
  );
}

export default App;
