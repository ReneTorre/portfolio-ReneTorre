import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation} from 'swiper';

import slide_image_1 from "./assets/images/img/calculadora.jpeg";
import slide_image_2 from "./assets/images/img/mariojumpIA.jpg";
import slide_image_3 from "./assets/images/img/pianoIA.jpg";
import slide_image_4 from "./assets/images/img/pokedex.jpeg";
import slide_image_5 from "./assets/images/img/previsao-do-tempo.jpeg";

export function Portfolio() {
  return (
    
    <div className="container">
      <Swiper 
        effect= { 'coverflow' }
        grabCursor={true}
        centeredSlides={true}
        // loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
      
        <SwiperSlide>
          <div class="wrapper-cards">

            <div class="gradient">
              <p>Uma calculadora virtual totalmente funcional, neste projeto você pode fazer diversos tipos de
              cálculos.</p>

              <div class="cta-project">
                <a href="https://github.com/ReneTorre/calculadora" target="_blank">
                  <i class="fa-brands fa-github"></i>
                  Código
                </a>
                <a href="https://calculadora-renetorre.netlify.app" target="_blank">
                  <i class="fa-solid fa-play"></i>
                  Exibir
                </a>
              </div>

            </div>
      
            
            <img class='img-cards' src={slide_image_1} alt="slide_image" />

          </div>
           
        </SwiperSlide>


        <SwiperSlide>

        <div class="wrapper-cards">

            <div class="gradient">
              <p>Este projeto é um mini jogo do Mario que ainda esta em faze de aprimoramento mas, você
                já consegue se divertir.</p>

              <div class="cta-project">
                <a href="https://github.com/ReneTorre/mario-jump" target="_blank">
                  <i class="fa-brands fa-github"></i>
                  Código
                </a>
                <a href="https://mariojump-renetorre.netlify.app" target="_blank">
                  <i class="fa-solid fa-play"></i>
                  Exibir
                </a>
              </div>

            </div>

            
            <img class='img-cards' src={slide_image_2} alt="slide_image" />

          </div>

          
        </SwiperSlide>


        <SwiperSlide>

        <div class="wrapper-cards">

            <div class="gradient">
              <p>Este é um mini Piano Virtual, contendo notas em cada tecla.</p>

              <div class="cta-project">
                <a href="https://github.com/ReneTorre/piano-virtual" target="_blank">
                  <i class="fa-brands fa-github"></i>
                  Código
                </a>
                <a href="https://piano-renetorre.netlify.app" target="_blank">
                  <i class="fa-solid fa-play"></i>
                  Exibir
                </a>
              </div>

            </div>


            <img class='img-cards' src={slide_image_3} alt="slide_image" />

          </div>

          
        </SwiperSlide>


        <SwiperSlide>

        <div class="wrapper-cards">

            <div class="gradient">
              <p>Este projeto é um simulador de enciclopédia virtual de espécies de pokémon.</p>

              <div class="cta-project">
                <a href="https://github.com/ReneTorre/pokedex" target="_blank">
                  <i class="fa-brands fa-github"></i>
                  Código
                </a>
                <a href="https://pokedex-renetorre.netlify.app" target="_blank">
                  <i class="fa-solid fa-play"></i>
                  Exibir
                </a>
              </div>

            </div>


            <img class='img-cards' src={slide_image_4} alt="slide_image" />

          </div>

          
        </SwiperSlide>


        <SwiperSlide>

        <div class="wrapper-cards">

            <div class="gradient">
              <p>Neste projeto você poderá verificar o clima, temperatura e umidade de qualquer cidade.</p>

              <div class="cta-project">
                <a href="https://github.com/ReneTorre/previsao-tempo" target="_blank">
                  <i class="fa-brands fa-github"></i>
                  Código
                </a>
                <a href="https://previsao-tempo-renetorre.netlify.app" target="_blank">
                  <i class="fa-solid fa-play"></i>
                  Exibir
                </a>
              </div>

            </div>

            <img class='img-cards' src={slide_image_5} alt="slide_image" />

          </div>

          
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>

          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </Swiper>
    </div>
    );
}