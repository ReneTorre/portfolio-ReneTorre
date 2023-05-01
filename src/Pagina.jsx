import React from 'react'; 
import { Portfolio } from './portfolio.jsx';
import "./Pagina.css"
import { useEffect, useState } from 'react';


export function Pagina() {  

    const [scrollY, setScrollY] = useState(window.scrollY);
  
    useEffect(() => {
      function handleScroll() {
        setScrollY(window.scrollY);
      }
  
      window.addEventListener('scroll', handleScroll);
  
      // limpa o ouvinte de evento quando o componente é desmontado
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const headerStyle = {
      background: scrollY >= 200 ? '#0d1321' : '#0d1321',
    };


    function menuShow() {
        let menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            
        } else {
            menuMobile.classList.add('open');
            
        }
    }



  return (
        <>

    <section id="header">
       <a class="header-title" href="">
       <h1>Rene.dev</h1> 
        </a>

        <button class="navbar-toggle" onClick={menuShow} aria-label="Abrir menu">
            <span class="navbar-toggle-icon"></span>
        </button>

        <nav class="navbar">
            <ul>
                <li><a href="#person">Home</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contacts">Contatos</a></li>
            </ul>
        </nav>

    </section>

    <div class="mobile-menu">
        <ul onClick={menuShow}>
            <li class="nav-item"><a href="#person" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="#about" class="nav-link">Sobre</a></li>
            <li class="nav-item"><a href="#projects" class="nav-link">Projetos</a></li>
            <li class="nav-item"><a href="#contacts" class="nav-link">Contato</a></li>
        </ul>
    </div>


    <section id="person">

        <div class="person-content">
            <div class="person-name">
                <h1>Olá, <span></span></h1>
                <h1>Eu sou o <span></span></h1>
                <h1>Renê Torre <span></span></h1>
            </div>

            <div class="stacks-content">
                <h3>Techs: </h3>

                <div class="stacks">
                    <ul>
                        <li> <div data="HMTL"> <img src="./src/assets/images/img/svg/html.svg" alt="html-icon"/> </div> </li>
                    </ul>

                    <ul>
                        <li> <div data="CSS"> <img src="./src/assets/images/img/svg/css.svg" alt="css-icon"/> </div> </li>
                    </ul>
                    
                    <ul>
                        <li> <div data="JS"> <img src="./src/assets/images/img/svg/js.svg" alt="js-icon"/> </div> </li>
                    </ul>

                    <ul>
                        <li> <div data="REACT"> <img src="./src/assets/images/img/svg/react.svg" alt="react-icon"/> </div> </li>
                    </ul>
                    
                    <ul> 
                        <li> <div data="NODE"> <img src="./src/assets/images/img/svg/node.svg" alt="node-icon"/> </div> </li>  
                    </ul>


                </div>


            </div>
        </div>


        <div class="person-background">
            <div class="wrapper-profile-photo">
                <img class="profile-photo" src="./src/assets/images/img/FOTOS_RENE-20.jpg" alt="Foto-Rene"/>
            </div>

            <div class="links">
                <a href="https://www.linkedin.com/in/renetorre-" target="_blank">
                    <img src="./src/assets/images/img/svg/logo-linkedin.svg" alt="linkedin-icon"/>
                </a>

                <a href="https://github.com/ReneTorre"target="_blank">
                    <img src="./src/assets/images/img/svg/logo-github.svg" alt="github-icon"/>
                </a>

                <a href="https://www.instagram.com/renetorre_/"target="_blank">
                    <img src="./src/assets/images/img/svg/logo-insta.svg" alt="insta-icon"/>
                </a>
            </div>


        </div>

    </section>
    

    
    <section id="about">
        <div class="background-about">
            <div class="img-wrapper">
                <img src="./src/assets/images/img/FOTOS_RENE-04.jpg" alt="img2-Rene"/>
            </div>
        </div>

        <div class="box-about">
            <div class="section-subtitle">

                <h2>
                    <p>🖥️ Estudante de Análise e Desenvolvimento de Sistemas</p>
                </h2>
            </div>

            <h3>
                Sou um estudante de Análise e Desenvolvimento de Sistemas. Embora eu ainda não tenha experiência 
                profissional na área, estou dedicado a aprender e aprimorar ainda mais as minhas 
                habilidades em: 
                <p class="destaque">Javascript, Java, HTML, CSS, Node e React. No geral, front-end e back-end.</p>
            </h3>   
            
            <h3>
                Meu nome é Renê Torre, tenho 23 anos e estou em busca do meu primeiro 
                emprego na área de Análise e Desenvolvimento de Sistemas. Atualmente, 
                estou aberto a oportunidades como Estágio, Desenvolvedor Back-End ou 
                Front-End, com o objetivo de aplicar meus conhecimentos. Estou comprometido 
                em aprender novas tecnologias e habilidades para me tornar um desenvolvedor 
                ainda mais eficiente.
            </h3>

            <h3>
                Abaixo está o meu <p class="curriculo">Currículo</p> para download.
            </h3>

            <div class="button-cta">
                <a href="public/document/CV-ReneTorre.pdf" download="CV-Rene-Torre" arial-label="Baixar curriculo Rene Torre">
                    Currículo
                </a>
            </div>

        </div>

    </section>
    

    
    <section id="projects">
        <div class="projects-title">
            <h2>PROJETOS 👨🏾‍💻</h2>
        </div>

        <Portfolio/>


    </section>


   

    <footer>
              <div class="container-footer">
                  <section id="contacts">
                      <div class="contact-icon-content">
                          <h2>Contato
                              <i class="fa-brands fa-whatsapp"></i>
                          </h2>
                      </div>

                      <div class="contact-icons-wrapper">
                          <div class="contact-icon-content">
                              <div class="contact-icon">
                                  <i class="fa-solid fa-location-dot"></i>
                              </div>
                              <div class="contact-info">
                                  <span>Localização</span>
                                  <p>Recife-PE, Brasil</p>
                              </div>
                        </div>

                          <div class="contact-icon-content">
                              <div class="contact-icon">
                                  <i class="fa-solid fa-envelope-open-text"></i>
                              </div>
                              <div class="contact-info">
                                  <span>E-mail: </span>
                                  <a href="mailto: renetorre20@hotmail.com "> renetorre20@hotmail.com </a>
                              </div>
                          </div>
                      </div>

                  </section>

                  <div class='box-colum'>
                      <div class="column-projects">
                          <h3>Projetos</h3>
                          <ul>
                              <li><a href="https://mariojump-renetorre.netlify.app" target="_blank">Mario Jump</a></li>
                              <li><a href="https://pokedex-renetorre.netlify.app/" target="_blank">Pokedex</a></li>
                              <li><a href="https://piano-renetorre.netlify.app/" target="_blank">Piano Virtual</a></li>
                              <li><a href="#projects">Ver Todos</a></li>
                          </ul>
                      </div>
                      <div class="column-sociais">
                          <h3>Sociais</h3>
                          <ul>
                              <li><a href="https://github.com/ReneTorre" target="_blank">Github</a></li>
                              <li><a href="https://www.linkedin.com/in/renetorre-" target="_blank">Linkedin</a></li>
                              <li><a href="https://www.instagram.com/renetorre_/" target="_blank">Instagram</a></li>
                          </ul>
                      </div>
                  </div>
              </div>


              <div class="copyright">
                  <p>Rene Torre©2023</p>
              </div>
    </footer>
    


        </>
  );
}

