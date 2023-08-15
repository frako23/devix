import { useState, useEffect } from "react";
import "./styles/index.css";
import { Testimonials } from "./components/testimonials";
import { Projects } from "./components/projects";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";
import imagen from "./assets/img/portatil-junto-tableta-telefono (1).jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Typewriter } from "react-simple-typewriter";

function App() {
  const [toggler, setToggler] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  const [accordion1, setAccordion1] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  const [accordion4, setAccordion4] = useState(false);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);
  const handleToggler = () => setToggler(!toggler);

  const [state, handleSubmit] = useForm("xeqbqwwv");
  function limpiarFormulario() {
    document.getElementById("formul").reset();
  }

  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        icon: "success",
        title: "!Gracias por contactarnos!",
        text: "Te responderemos lo más pronto posible!",
        confirmButtonColor: "#1bbc9c",
        // footer: '<a href="">Why do I have this issue?</a>'
      });
      limpiarFormulario();
    }
  }, [state.succeeded]);

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
                onClick={handleToggler}
              >
                <i
                  className={
                    toggler
                      ? "rotate fa-solid fa-xmark"
                      : "rotate fa-solid fa-bars"
                  }
                ></i>
              </button>
            </div>

            <div className={!toggler ? "navbar-collapse" : "navbar-expand"}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#intro" className="nav-link">
                    intro
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#feature" className="nav-link">
                    feature
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#team" className="nav-link">
                    team
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#pricing" className="nav-link">
                    pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#testimonial" className="nav-link">
                    testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link">
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="hero-div center container">
          <h1 id="main-title">Haz que tu página web </h1>

          <h1>
            {" "}
            <span className="typing" style={{display: "flex"}}>
              <Typewriter
                words={[" Impresione.", " Destaque.", " Sorprenda."]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            {/* <span className={typing && "typing"}>impresione</span>{" "} */}
          </h1>
          <p>La mejor manera de que personas conecten con tu marca.</p>

          <div className="hero-btns">
            <button type="button" className="btn-trans">
              Descubre más
            </button>
            <button type="button" className="btn-white">
              Conoce a nuestros proyectos
            </button>
          </div>
        </div>
      </header>
      {/* termina el header */}

      {/* comienza la sección de detalle */}
      <section className="detail">
        <div className="container">
          <div className="row">
            <div className="detail-item">
              <span>
                <i className="fas fa-tablet-alt"></i>
              </span>
              <h2>Diseño adaptado a cada pantalla</h2>
              <div className="line"></div>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                odio et fugit assumenda alias? Accusamus, iste. Rem deserunt
                corporis similique ipsam sint vel reiciendis eligendi!
              </p>
            </div>
            <div className="detail-item">
              <span>
                <i className="fab fa-html5"></i>
              </span>
              <h2>HTML5</h2>
              <div className="line"></div>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                odio et fugit assumenda alias? Accusamus, iste. Rem deserunt
                corporis similique ipsam sint vel reiciendis eligendi!
              </p>
            </div>
            <div className="detail-item">
              <span>
                <i className="far fa-bell"></i>
              </span>
              <h2>Soporte las 24 Horas</h2>
              <div className="line"></div>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                odio et fugit assumenda alias? Accusamus, iste. Rem deserunt
                corporis similique ipsam sint vel reiciendis eligendi!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* termina la sección de detalle */}

      {/* inicia sección de caracteristicas */}
      <section className="feature">
        <div className="container">
          <div className="row">
            <div className="feature-left">
              <img src={imagen} alt="" />
            </div>
            <div className="feature-right">
              <div className="title">
                <h2>Explora el futuro</h2>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  corrupti provident dolor excepturi animi consequatur?
                </p>
              </div>
              <div className="feature-item">
                <span>
                  {" "}
                  <i className="fas fa-tablet-alt"></i>
                </span>
                <div>
                  <h3>Diseno Adaptado</h3>
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    voluptatibus tenetur nesciunt laborum tempore pariatur.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <span>
                  {" "}
                  <i className="fas fa-clone"></i>
                </span>
                <div>
                  <h3>Listo para tus sentidos</h3>
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    voluptatibus tenetur nesciunt laborum tempore pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* termina sección de caracteristicas */}

      {/* comienza la sección de proyectos */}

      {/* <Projects /> */}

      {/* termina la sección de proyectos */}
      <section className="team">
        <div className="container">
          <div className="title">
            <h2>Conoce a personas apasionadas por lo que hacen</h2>
            <p className="tex">Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="row slider">
            <Carousel
              // width={"50%"}
              // centerMode={true}
              // centerSlidePercentage={50}
              autoPlay={true}
              emulateTouch={true}
              infiniteLoop={true}
            >
              {/* Francisco */}
              <div className="team-item">
                <div className="team-img">
                  <img
                    src="https://media.licdn.com/dms/image/D4E03AQGg4xkJ4_EM9g/profile-displayphoto-shrink_800_800/0/1671706099943?e=1697673600&v=beta&t=DvS9efNn80Lsobo8lSBXfj_tu_bN01DfU8PmS1EBY0k"
                    alt=""
                  />
                  <div className="team-icons">
                    <a
                      href="https://www.linkedin.com/in/franciscorozco/"
                      className="center"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/frako23" className="center">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://wa.me/584242526757" className="center">
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>Francisco Orozco</h3>
                  <span>Software Developer</span>
                </div>
              </div>

              {/* Daniel */}
              <div className="team-item">
                <div className="team-img">
                  <img
                    src="https://media.licdn.com/dms/image/D4E35AQF8mipeWnssvA/profile-framedphoto-shrink_800_800/0/1671752081473?e=1692630000&v=beta&t=s7Gvasxxp83AFOqrGMw4BkKtpuOezFWeaMB70gCKY6M"
                    alt=""
                  />
                  <div className="team-icons">
                    <a
                      href="https://www.linkedin.com/in/daniel-moret/"
                      className="center"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/danielmoret" className="center">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://wa.me/584241751100" className="center">
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>Daniel Moret</h3>
                  <span>Software Developer</span>
                </div>
              </div>

              {/* Abel */}
              <div className="team-item">
                <div className="team-img">
                  <img
                    src="https://media.licdn.com/dms/image/C4E03AQGSdfNcTGJkiw/profile-displayphoto-shrink_800_800/0/1545141932886?e=1697673600&v=beta&t=-OzACtGnn6jL7jO3bXxQqZfyA6P61McIhgzIuDXgL5o"
                    alt=""
                  />
                  <div className="team-icons">
                    <a
                      href="https://www.linkedin.com/in/carlos-abel-colmenares-uray-6b7a57b7/"
                      className="center"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#" className="center">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://wa.me/584127042420" className="center">
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>Abel Colmenarez</h3>
                  <span>Senior Software Developer</span>
                </div>
              </div>

              {/* Mariangel */}
              <div className="team-item">
                <div className="team-img">
                  <img
                    src="https://media.licdn.com/dms/image/C4D03AQEKnm__Q6qV9w/profile-displayphoto-shrink_800_800/0/1645018791809?e=1697673600&v=beta&t=SaLHA6Fl8qvEx8LPNNh_6JX6YhZ2iI25jh3UC1sKoWU"
                    alt=""
                  />
                  <div className="team-icons">
                    <a
                      href="https://www.linkedin.com/in/mariangel-rodriguez-perozo-/"
                      className="center"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/mariangellifestyle/"
                      className="center"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/584241560579" className="center">
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>Mariangel Rodríguez</h3>
                  <span>Community Manager</span>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      {/* Comienza la sección de equipo */}

      {/* Termina la sección de equipo */}

      {/* comienza la seccion de video */}
      <section className="video">
        <div className="container">
          <a className="center" href="">
            <i className="fas fa-play"></i>
          </a>
          <h2>Ve un video de muestra</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum esse
            accusantium dolore voluptates excepturi assumenda molestiae
            doloremque nemo ut sed!
          </p>
        </div>
      </section>

      {/* termina la seccion de video */}

      {/* comienza la seccion de equipo */}

      {/* termina la seccion de equipo*/}

      {/* comienza la seccion de preguntas frecuentes */}
      <section className="faq">
        <div className="container">
          <div className="title">
            <h2>Tienes alguna duda?</h2>
            <p className="text">Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="row">
            <div
              onClick={() => setAccordion1(!accordion1)}
              className="faq-item"
            >
              <div className="faq-head">
                <h3>¿Por qué es importante tener presencia en internet?</h3>
                <span>
                  <i
                    className={accordion1 ? "fa-solid fa-minus" : "fas fa-plus"}
                  ></i>
                </span>
              </div>
              <div className={accordion1 ? "show-faq-content" : "faq-content"}>
                <p className="text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nesciunt quo velit, facilis unde voluptates dolor sed
                  pariatur, suscipit dolore tempore, minus dolores recusandae
                  voluptatem saepe?
                </p>
                <p className="text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nesciunt quo velit, facilis unde voluptates dolor sed
                  pariatur, suscipit dolore tempore, minus dolores recusandae
                  voluptatem saepe?
                </p>
              </div>
            </div>

            <div
              onClick={() => setAccordion2(!accordion2)}
              className="faq-item"
            >
              <div className="faq-head">
                <h3>¿Por qué es importante tener presencia en internet?</h3>
                <span>
                  <i
                    className={accordion2 ? "fa-solid fa-minus" : "fas fa-plus"}
                  ></i>
                </span>
              </div>
              <div className={accordion2 ? "show-faq-content" : "faq-content"}>
                <p className="text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nesciunt quo velit, facilis unde voluptates dolor sed
                  pariatur, suscipit dolore tempore, minus dolores recusandae
                  voluptatem saepe?
                </p>
                <p className="text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nesciunt quo velit, facilis unde voluptates dolor sed
                  pariatur, suscipit dolore tempore, minus dolores recusandae
                  voluptatem saepe?
                </p>
              </div>
            </div>

            <div
              onClick={() => setAccordion3(!accordion3)}
              className="faq-item"
            >
              <div className="faq-head">
                <h3>¿Por qué es importante tener presencia en internet?</h3>
                <span>
                  <i
                    className={accordion3 ? "fa-solid fa-minus" : "fas fa-plus"}
                  ></i>
                </span>
              </div>
              <div className={accordion3 ? "show-faq-content" : "faq-content"}>
                <p className="text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nesciunt quo velit, facilis unde voluptates dolor sed
                  pariatur, suscipit dolore tempore, minus dolores recusandae
                  voluptatem saepe?
                </p>
                <p className="text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nesciunt quo velit, facilis unde voluptates dolor sed
                  pariatur, suscipit dolore tempore, minus dolores recusandae
                  voluptatem saepe?
                </p>
              </div>
            </div>

            <div
              onClick={() => setAccordion4(!accordion4)}
              className="faq-item"
            >
              <div className="faq-head">
                <h3>¿Por qué es importante tener presencia en internet?</h3>
                <span>
                  <i
                    className={accordion4 ? "fa-solid fa-minus" : "fas fa-plus"}
                  ></i>
                </span>
              </div>
              <div className={accordion4 ? "show-faq-content" : "faq-content"}>
                <p className="text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nesciunt quo velit, facilis unde voluptates dolor sed
                  pariatur, suscipit dolore tempore, minus dolores recusandae
                  voluptatem saepe?
                </p>
                <p className="text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nesciunt quo velit, facilis unde voluptates dolor sed
                  pariatur, suscipit dolore tempore, minus dolores recusandae
                  voluptatem saepe?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* termina la seccion de preguntas frecuentes */}

      {/* inicia la sección de testimoniales */}
      {/* <Testimonials /> */}
      {/* termina la sección de testimoniales */}

      {/* sección de contacto */}
      <section className="contact">
        <div className="container">
          <div className="title">
            <h2>Contáctanos</h2>
            <p className="text">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="row">
            <div className="contact-left">
              <h2>Envia tu mensaje aquí</h2>
              <form onSubmit={handleSubmit} id="formul">
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Nombre"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Correo"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="6"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={state.submitting}
                >
                  {" "}
                  Enviar
                </button>
              </form>
            </div>

            <div className="contact-right">
              <div>
                <h2>
                  Envianos un correo <i className="fa-solid fa-envelope"></i>
                </h2>
                <p className="text">
                  {" "}
                  <a href="mailto:devix.tech.2023@gmail.com">
                    {" "}
                    devix.tech.2023@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h2>
                  Envianos un Whatsapp <i className="fa-brands fa-whatsapp"></i>
                </h2>
                <p className="text">0412-xxxxxx</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* sección de contacto */}

      {/* footer */}
      <footer className="footer center">
        <div className="container">
          <p className="text">
            Copyright <i className="fa-regular fa-copyright"></i> | Todos los
            derechos reservados
          </p>
          <div className="footer-links">
            <a href="https://github.com/frako23" className="center">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="center">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="center">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="center">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href="#" className="center">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
      {/* footer */}
    </>
  );
}

export default App;
