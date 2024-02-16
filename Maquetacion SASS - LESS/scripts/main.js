/* Declaraciones */

const d = document

const menuBtn = d.querySelector('nav .btn')
const menuList = d.querySelector('nav .menu')


const pBar = d.querySelector('.progress progress')
const pIn = d.querySelector('.progress input') 

const prev = d.querySelector('.icon-prev')
const next = d.querySelector('.icon-next')

const slideList = d.querySelectorAll('.slide li')
const slideSpan = d.querySelectorAll('.controls span')

/* Navigation bar */

manuBtn.onClick = () => menuList.classList.toggle('active') ? 
menuBtn.innerHTML = '&times' : menuBtn.innerHTML = '&equiv'

/* ? es un ternario que significa IF ELSE */

/* progress bar */
pIn.onInput = () => pBar.value = pIn.value

/* Canvas */

const ctx = d.querySelector('#canvas').getContext('2d')

/* para crear un rectangulo: .fillRect( x, y , width, height)  */
ctx.fillRect(50, 50, 100, 100) 
ctx.fillStyle = "hsl(240, 30%, 40%)"

/* para crear un circulo: .arc( cx, cy, r, start, end )  */

ctx.arc(150, 150, 0, 2 * Math.PI)
ctx.fillStyle = "hsla (0, 50%, 50%, .5)"
ctx.fill()

/* para crear un poligono :  */

ctx.beginPath()
ctx.fillStyle = "hsl(120, 30%, 40%)"

/* moveTo es muevo el lapiz */
ctx.moveTo(150,50)
/* lineTo marco la linea */
ctx.lineTo(150,150)
ctx.lineTo(225,100)
ctx.fill()

/* para crear texto .strokeText ( texto, x, y ) */

ctx.strokeText("JavaScript Canvas", 50, 250)

ctx.font = "bold calibri sans-serif"


/* Gallery simple */

prev.onClick = ()=> (changeItem(slideList), changeItem(slideSpan))
next.onClick = ()=> (changeItem(slideList, true), changeItem(slideSpan))

const changeItem = (array, type, className = 'active')=> {
    for(i = 0; i < array.length; i++){
        if(array[i].classList.contains(className)){
            array[i].classList.remove(className)
            switch(type){
                case true: 
                    i < array.length - 1 ?
                        newItem = array[i + 1] :
                        newItem = array[0]
                break;
                default:
                    i > 0 ? 
                        newItem = array[i - 1] :
                        newItem = array[array.length - 1]

            }
        }
    }
    newItem.classList.add(className)
}



