// Controles navbar music

var videos = [
  "img/video1.mp4",
  "img/video2.mp4",
  "img/video3.mp4",
  "img/video4.mp4"
];

var currentVideoIndex = 0;
var videoPlayer = document.getElementById('video-player');
var previousBtn = document.getElementById('previous-btn');
var playBtn = document.getElementById('play-btn');
var nextBtn = document.getElementById('next-btn');
var previousBtn2 = document.getElementById('previous-btn2');
var playBtn2 = document.getElementById('play-btn2');
var nextBtn2 = document.getElementById('next-btn2');


function loadVideo() {
  videoPlayer.src = videos[currentVideoIndex];
  videoPlayer.load();
}

function playVideo() {
  videoPlayer.play();
  playBtn.classList.remove('blink-1');
  playBtn2.classList.remove('blink-1');
}

function pauseVideo() {
  videoPlayer.pause();
}

function switchPlayPauseButton() {
  if (videoPlayer.paused) {
    playBtn.innerHTML = '<svg class="w-8 h-8" style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="info"/><g id="icons"><path d="M3.9,18.9V5.1c0-1.6,1.7-2.6,3-1.8l12,6.9c1.4,0.8,1.4,2.9,0,3.7l-12,6.9C5.6,21.5,3.9,20.5,3.9,18.9z"  fill="#466EC3" id="play"/></g></svg>';
  } else {
    playBtn.innerHTML = '<svg class="w-8 h-8" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z" fill="#466EC3"/></svg>';
  }
}

function switchPlayPauseButton2() {
  if (videoPlayer.paused) {
    playBtn2.innerHTML = '<svg class="w-8 h-8" style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g id="info"/><g id="icons"><path d="M3.9,18.9V5.1c0-1.6,1.7-2.6,3-1.8l12,6.9c1.4,0.8,1.4,2.9,0,3.7l-12,6.9C5.6,21.5,3.9,20.5,3.9,18.9z"  fill="#466EC3" id="play"/></g></svg>';
  } else {
    playBtn2.innerHTML = '<svg class="w-8 h-8" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z" fill="#466EC3"/></svg>';
  }
}

function playNextVideo() {
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  loadVideo();
  playVideo();
  switchPlayPauseButton();
}

function playPreviousVideo() {
  currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
  loadVideo();
  playVideo();
  switchPlayPauseButton();
}

function playNextVideo2() {
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  loadVideo();
  playVideo();
  switchPlayPauseButton();
}

function playPreviousVideo2() {
  currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
  loadVideo();
  playVideo();
  switchPlayPauseButton();
}

previousBtn.addEventListener('click', playPreviousVideo);

playBtn.addEventListener('click', function() {
  if (videoPlayer.paused) {
    playVideo();
  } else {
    pauseVideo();
  }
  switchPlayPauseButton();
});

playBtn2.addEventListener('click', function() {
  if (videoPlayer.paused) {
    playVideo();
  } else {
    pauseVideo();
  }
  switchPlayPauseButton2();
});


previousBtn2.addEventListener('click', playPreviousVideo2);
nextBtn2.addEventListener('click', playNextVideo2);
nextBtn.addEventListener('click', playNextVideo);

// Reproducir el siguiente video cuando el video actual termine
videoPlayer.addEventListener('ended', playNextVideo);

// Cargar el primer video al iniciar el reproductor
loadVideo();


// SOBRE MI

function activateLink(linkId) {
  // Obtener todos los enlaces
  const links = document.querySelectorAll('.cursor-pointer');

  // Eliminar la clase 'active' de todos los enlaces
  links.forEach(link => link.classList.remove('active'));

  // Agregar la clase 'active' al enlace seleccionado
  const selectedLink = document.getElementById(linkId);
  selectedLink.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  // Activar el primer enlace por defecto
  const defaultLinkId = 'link1';
  activateLink(defaultLinkId);
});

function activateLink(linkId) {
  // Reiniciar todos los enlaces para que no estén activos
  const links = document.querySelectorAll('.cursor-pointer');
  links.forEach(link => link.classList.remove('active'));

  // Obtener el enlace activo y agregar la clase 'active'
  const activeLink = document.getElementById(linkId);
  activeLink.classList.add('active');

  // Obtener el contenedor del contenido a cambiar
  const contentContainer = document.querySelector('.content-container');

  // Cambiar el contenido según el enlace activo
  if (linkId === 'link1') {
    contentContainer.innerHTML = `
      <div class="container flex flex-col md:flex-row-reverse items-start justify-start md:justify-between">
        <div class="md:w-1/2 w-full md:ml-6 mb-8 md:mb-0">
          <div class="max-w-full mx-auto">
            <img class="w-full md:w-full object-cover object-center rounded-xl" alt="persona con notebook ingresando al internet global" src="img/accesibilidad.jpg">
          </div>
        </div>
        <div class="md:w-1/2 w-full">
          <div class="text-center md:text-left">
            <p class="text-justify md:text-lg lg:text-lg md:pr-6 leading-relaxed text-base text-claro dark:text-white">El desarrollo de páginas web accesibles me resulta llamativo debido a la oportunidad de marcar una diferencia positiva en la vida de las personas, al promover la inclusión digital y brindar igualdad de oportunidades. Además, disfruto del desafío creativo y técnico que implica encontrar soluciones innovadoras y flexibles para adaptar interfaces a diversas necesidades. 
            </p>
          </div>
        </div>
      </div>
    `;
  } else if (linkId === 'link2') {
    contentContainer.innerHTML = `
      <div class="container flex flex-col md:flex-row-reverse items-start justify-start md:justify-between">
        <div class="md:w-1/2 w-full md:ml-6 mb-8 md:mb-0">
          <div class="max-w-full mx-auto">
            <video class="w-full md:w-full object-cover object-center rounded-xl" autoplay muted loop src="img/cbpk.mp4"></video>
          </div>
        </div>
        <div class="md:w-1/2 w-full">
          <div class="text-center md:text-left">
            <p class="text-justify text-md lg:text-lg md:pr-6 leading-relaxed text-base text-claro dark:text-white"> La inteligencia artificial capta significativamente mi atención debido a su capacidad de transformar diferentes industrias y sectores, así como su impacto en la sociedad y nuestras interacciones tanto con las personas como con las máquinas. Me maravilla la habilidad de las máquinas para procesar información, aprender, razonar y tomar decisiones de manera autónoma. Estoy convencido de que el potencial que conlleva la IA cambiará radicalmente nuestro mundo en poco tiempo debido al impacto en la eficiencia, la productividad y la calidad de vida de las personas.
            <br><br>
            Es por todas estas razones que he decidido sumergirme en el estudio de la IA. Deseo aprovechar al máximo sus ventajas y, al mismo tiempo, aprender a lidiar de manera efectiva con sus posibles desventajas. Estoy emocionado por explorar cómo puedo contribuir a esta revolución tecnológica de una manera profesional.</p>
          </div>
        </div>
      </div>
    `;
  } else if (linkId === 'link3') {
    contentContainer.innerHTML = `
      <div class="container flex flex-col md:flex-row-reverse items-start justify-start md:justify-between">
        <div class="md:w-1/2 w-full md:ml-6 mb-8 md:mb-0">
          <div class="max-w-full mx-auto">
            <img class="w-full md:w-full object-cover object-center rounded-xl" alt="imagen isometrica o 3d, con notebook y taza de café al costado izquierdo" src="img/front.jpg">
          </div>
        </div>
        <div class="md:w-1/2 w-full">
          <div class="text-center md:text-left">
            <p class="text-justify text-md lg:text-lg md:pr-6 leading-relaxed text-base text-claro dark:text-white">Me fascina el desarrollo Frontend por la manera en que puedo dar vida a diseños atractivos y funcionales utilizando tecnologías como Tailwind CSS, GSAP, React y React Native. La flexibilidad de Tailwind CSS me permite crear interfaces modernas y personalizadas de manera eficiente, mientras que GSAP agrega animaciones fluidas y sorprendentes a mis proyectos. Además, React y React Native me brindan la capacidad de construir aplicaciones web y móviles de alto rendimiento y escalables. 
            <br><br>
            Como frontend, considero que es esencial dominar herramientas como Git para el control de versiones, preprocesadores, tests unitarios y la optimización del rendimiento. Estas herramientas me permiten optimizar mi flujo de trabajo y colaborar de manera efectiva con otros desarrolladores lo cual fortalecerá mi perfil profesional y me bridara habilidades sumamente necesarias para mi desarrollo.</p>
          </div>
        </div>
      </div>
    `;
  } else if (linkId === 'link4') {
    contentContainer.innerHTML = `
      <div class="container flex flex-col md:flex-row-reverse items-start justify-start md:justify-between">
        <div class="md:w-1/2 w-full md:ml-6 mb-8 md:mb-0">
          <div class="max-w-full mx-auto">
            <img class="w-full md:w-full object-cover object-center rounded-xl" alt="evento tecnologico con una persona dando la charla sobre el escenario principal" src="img/evento.jpg">
          </div>
        </div>
        <div class="md:w-1/2 w-full">
          <div class="text-center md:text-left">
            <p class="text-justify text-md lg:text-lg md:pr-6 leading-relaxed text-base text-claro dark:text-white">Entender y hablar inglés técnico como profesional es realmente importante para mi desarrollo. Estoy entusiasmado por aprender y mejorar mi habilidad de comprender y comunicarme en temas relacionados con la programación, desarrollo web y marketing. Esta habilidad amplía mis oportunidades laborales, me permite acceder a recursos valiosos y me conecta con una comunidad global de desarrolladores, lo cual enriquece mi crecimiento personal y profesional.<br><br>
            Me esfuerzo mucho para dominar este idioma y poder comunicarme globalmente, acceder a información actualizada y mantenerme competitivo en el campo de la tecnología.</p>
          </div>
        </div>
      </div>
    `;
  }
}




