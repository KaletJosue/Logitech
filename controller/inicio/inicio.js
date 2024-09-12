var morado = document.querySelector('.morado')
var dorado = document.querySelector('.dorado')
var beige = document.querySelector('.beige')
var rosado = document.querySelector('.rosado')

var img_morado = document.getElementById('img_morado')
var img_dorado = document.getElementById('img_dorado')
var img_beige = document.getElementById('img_beige')
var img_rosado = document.getElementById('img_rosado')

var fondo = document.querySelector('.products')
var text_product = document.querySelector('.text_product')
var title_text = document.querySelector('.title_text')

morado.addEventListener('click', () => {
    img_morado.classList.add('active')
    img_dorado.classList.remove('active')
    img_beige.classList.remove('active')
    img_rosado.classList.remove('active')
    fondo.style.background = 'radial-gradient(#ab9ec4, #5f5075)'
    img_morado.style.filter = 'drop-shadow(1px 1px 2rem #413750)'
    text_product.textContent = 'Te presentamos el K380, un teclado multidispositivo que destaca por su diseño compacto y elegante. Es ideal para quienes buscan versatilidad y comodidad, ya que puedes utilizarlo con computadoras.'
    title_text.textContent = "Teclado K380"
})

dorado.addEventListener('click', () => {
    img_morado.classList.remove('active')
    img_dorado.classList.add('active')
    img_beige.classList.remove('active')
    img_rosado.classList.remove('active')
    fondo.style.background = 'radial-gradient(#c3bfb4, #787370)'
    img_beige.style.filter = 'drop-shadow(1px 1px 2rem #191817)'
    text_product.textContent = 'Da rienda suelta a tu personalidad en tu escritorio y más allá con POP Keys. Úsalo con POP Mouse a juego para reflejar cómo eres, con una estética de escritorio llamativa y divertidas teclas de emojis personalizables.'
    title_text.textContent = "Teclado POP KEYS"
})

beige.addEventListener('click', () => {
    img_morado.classList.remove('active')
    img_dorado.classList.remove('active')
    img_beige.classList.add('active')
    img_rosado.classList.remove('active')
    fondo.style.background = 'radial-gradient(#c3bfb4, #787370)'
    img_beige.style.filter = 'drop-shadow(1px 1px 2rem #191817)'
    text_product.textContent = 'Te presentamos el K380, un teclado multidispositivo que destaca por su diseño compacto y elegante. Es ideal para quienes buscan versatilidad y comodidad, ya que puedes utilizarlo con computadoras.'
    title_text.textContent = "Teclado K380"
})

rosado.addEventListener('click', () => {
    img_morado.classList.remove('active')
    img_dorado.classList.remove('active')
    img_beige.classList.remove('active')
    img_rosado.classList.add('active')
    fondo.style.background = 'radial-gradient(#d86d72, #b43345)'
    img_rosado.style.filter = 'drop-shadow(1px 1px 2rem #421319)'
    text_product.textContent = 'Da rienda suelta a tu personalidad en tu escritorio y más allá con POP Keys. Úsalo con POP Mouse a juego para reflejar cómo eres, con una estética de escritorio llamativa y divertidas teclas de emojis personalizables.'
    title_text.textContent = "Teclado POP KEYS"
})