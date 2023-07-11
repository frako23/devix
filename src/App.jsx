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

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere culpa placeat, deleniti doloremque, dolores impedit animi rerum inventore id sapiente ducimus magni, accusantium excepturi incidunt consequuntur architecto! Placeat accusamus totam ducimus reprehenderit exercitationem sapiente tenetur, possimus itaque? Natus accusamus necessitatibus facere in officiis ducimus ab amet eaque nulla porro quas quae aliquid ratione earum praesentium illum cumque libero deleniti similique maxime perferendis, quam consequuntur? Deleniti, quaerat, neque deserunt alias animi aliquid enim, eveniet id doloremque pariatur doloribus tenetur inventore voluptas provident eligendi ea. Illo suscipit sapiente perspiciatis omnis iure ea cupiditate error obcaecati culpa cumque et animi dignissimos, hic unde sequi eum. Sed adipisci excepturi alias minima. Dolorem minus quas aspernatur omnis veniam rerum consectetur, maiores voluptatem ea adipisci laboriosam? Doloremque harum aliquid, molestias non nulla distinctio beatae a, quasi amet perspiciatis corporis optio voluptate inventore suscipit voluptatibus. Tempora, tenetur fugiat hic, illum obcaecati rem, cupiditate necessitatibus temporibus a eveniet architecto neque. Quae totam libero maiores, modi quaerat nisi facilis tempora vero dolor architecto ullam nemo deserunt ad! Quam at animi tenetur, numquam quia voluptate vero quae cum nemo beatae sint itaque! Nostrum velit ipsam vel assumenda nulla, laudantium, quas sed, amet ipsum vitae esse! Impedit dolor ut magni, commodi distinctio beatae! Obcaecati explicabo et tempore, nisi suscipit optio nostrum tempora omnis voluptas qui fuga doloribus assumenda unde ipsa cupiditate quos ab ipsum fugit beatae aperiam? Libero ab rem ipsam dicta commodi, delectus nihil ut incidunt soluta corrupti? Consequuntur repellat perferendis accusamus rerum assumenda ipsa consequatur, nobis est eaque perspiciatis illo culpa magnam nesciunt debitis corrupti quos. Molestias quam quas nihil, atque nostrum reprehenderit debitis fuga perspiciatis, ullam culpa distinctio facilis sunt! Illo cumque eveniet saepe dolores sequi aspernatur voluptate sapiente laboriosam corporis sit ad nisi non, distinctio cupiditate ea veniam beatae? Vitae voluptas quaerat accusantium numquam, architecto distinctio minima illum eligendi quibusdam repellendus rem eveniet iusto magnam est fugit odit. Iure, eum iusto veniam, ea, pariatur dolorem corporis et iste tempora molestiae nesciunt dolores optio temporibus odit? Dolorum esse vero explicabo voluptatibus. Nam neque quae fugit, laboriosam cumque deserunt odio! Omnis quis minima excepturi doloribus sunt numquam beatae assumenda illo, blanditiis eligendi, et vel cum saepe eaque deserunt est. Ut magni eum tempora illum impedit dignissimos sapiente, explicabo aliquam, reiciendis est ducimus, in voluptatem itaque necessitatibus fugit. Animi voluptatum magnam minima molestias dolores beatae accusamus ab repellendus nobis harum neque iusto quod, odio fuga, repudiandae possimus. Eius, mollitia? Exercitationem, aliquid quas cum architecto quibusdam excepturi, dignissimos, sequi voluptatem quis maiores optio sapiente animi? Illum eaque facere repellendus! Aut veniam sit dolorum optio inventore, modi similique iure, aliquid voluptatibus voluptas quis architecto iusto ipsam deleniti ea, nisi id repellendus nihil perferendis et ut beatae sequi placeat. Quidem officia officiis minima at ducimus alias eligendi culpa magnam magni! Repellendus maiores dolorem nobis voluptates rerum nulla asperiores unde magnam. Cupiditate maiores illum autem, sit laboriosam cum deleniti esse distinctio odit natus minus officia ipsa reiciendis dolores officiis, sed deserunt earum impedit. Velit, nostrum quasi. Sit possimus at eligendi adipisci corporis, doloremque debitis?</p>

    </>
  );
}

export default App;
