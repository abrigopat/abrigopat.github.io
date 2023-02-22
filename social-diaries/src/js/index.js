const navbar = document.querySelector('.nav-bar')
const chicPink = '#f3a58f'

function navScroll(){
    navbar.style.backgroundColor = chicPink
    navbar.style.height = 100 + 'px'
    navbar.style.width = 100 + 'vw'
    //navbar.style.marginLeft = -5 + 'em'
    console.log('hellow')
}

navbar.addEventListener('click', navScroll)