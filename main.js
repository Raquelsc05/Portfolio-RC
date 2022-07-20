/* Botão voltar para o topo */

var btn = document.querySelector("#back-to-top")

btn.addEventListener('click', function(){
  Window.scrollTo(0,0)
})

var btn = $ ('html, body').animate({scrollTop: 0},'slow')

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = scrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, #home .profession`,

  { interval: 100 }
)



