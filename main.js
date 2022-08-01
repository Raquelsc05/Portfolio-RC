/*ScrollReveal: Mostrar elementos quando der scroll na página */




ScrollReveal({  
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true

}).reveal(`
#home, 
#home .image,
.text, 
.profession, 
#call button, #portifolio, #portifolio.img, #portifolio .desc, #skill, 
#skill button, 
.contact, 
#contactme button, footer`);




btn.addEventListener('click', function(){
  Window.scrollTo(0,0)
})

var btn = $ ('html, body').animate({scrollTop: 0},'slow')

