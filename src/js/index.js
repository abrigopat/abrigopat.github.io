// bug:
// kailangan irefresh minsan para 
// magreflect yung changes


const navbar = document.querySelector('.nav-bar')
var txt = document.querySelector('.nav-a')
var txt2 = document.querySelector('.nav-b')
var txt3 = document.querySelector('.nav-c')
const contactBtn = document.getElementById('contact')
const tipHeader = document.querySelector('.tips-header')

// var wid = document.documentElement.clientWidth || window.innerWidth
// if(wid >=950)

const mediaQuery = window.matchMedia('(min-width: 955px)')
    if (mediaQuery.matches){
      window.addEventListener('scroll', () => {

        if(window.scrollY >= 50){
          navbar.style.backgroundColor = 'transparent'
          tipHeader.style.marginTop = -6 + 'em'
          txt.style.color = 'white'
          contactBtn.style.color = 'white'
          txt2.style.color = 'white'
          txt3.style.color = 'white'
        
          contactBtn.addEventListener('mouseover', function( event ) {
              // highlight the mouseover target
              event.target.style.color = 'white'
            
              // reset the color after a short delay
              setTimeout(function() {
                event.target.style.color = 'white'
              }, 500);
          }, false);
        
          txt.addEventListener('mouseover', function( event ) {
              // highlight the mouseover target
              event.target.style.color = '#fb8200'
            
              // reset the color after a short delay
              setTimeout(function() {
                event.target.style.color = 'white'
              }, 500);
          }, false);
        
          txt2.addEventListener('mouseover', function( event ) {
              // highlight the mouseover target
              event.target.style.color = '#fb8200'
            
              // reset the color after a short delay
              setTimeout(function() {
                event.target.style.color = 'white'
              }, 500);
          }, false);
        
          txt3.addEventListener('mouseover', function( event ) {
              // highlight the mouseover target
              event.target.style.color = '#fb8200'
            
              // reset the color after a short delay
              setTimeout(function() {
                event.target.style.color = 'white'
              }, 500);
          }, false);
          
        } else{
          navbar.style.backgroundColor = 'white'
          tipHeader.style.marginTop = -.48 + 'em'
          txt.style.color = '#ffc5c4'
          contactBtn.style.color = '#ffc5c4'
          txt2.style.color = '#ffc5c4'
          txt3.style.color = '#ffc5c4'
        
          contactBtn.addEventListener('mouseover', function( event ) {
              // highlight the mouseover target
              event.target.style.color = 'white'
            
              // reset the color after a short delay
              setTimeout(function() {
                event.target.style.color = ''
              }, 500);
          }, false);
        
          txt.addEventListener('mouseover', function( event ) {
              // highlight the mouseover target
              event.target.style.color = '#fb8200'
            
              // reset the color after a short delay
              setTimeout(function() {
                event.target.style.color = ''
              }, 500);
          }, false);
          
          txt2.addEventListener('mouseover', function( event ) {
              // highlight the mouseover target
              event.target.style.color = '#fb8200'
            
              // reset the color after a short delay
              setTimeout(function() {
                event.target.style.color = ''
              }, 500);
          }, false);
        
          txt3.addEventListener('mouseover', function( event ) {
              // highlight the mouseover target
              event.target.style.color = '#fb8200'
            
              // reset the color after a short delay
              setTimeout(function() {
                event.target.style.color = ''
              }, 500);
          }, false);
          
        }
    })
} else {
    //navbar.style.backgroundColor = 'transparent'
    window.addEventListener('scroll', () => {
      if(window.scrollY <= 50){
        navbar.style.backgroundColor = 'white'
        navbar.style.marginLeft = 0 + 'em'
        tipHeader.style.marginTop = 3 + 'em'
      } else {
        navbar.style.backgroundColor = 'transparent'
      }
    
    }
  )
    
}






