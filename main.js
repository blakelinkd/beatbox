async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



let _time= Date.now()
const fart = 'fart'
let dict = {
    [_time]: 'farted'
}
sleep(1*25)
_time = Date.now().toLocaleString()
dict[_time] = 'butts'

// Get the coords of a click
function getClick() {
    let _x = null
    let _y = null 
    document.addEventListener('mousedown', (element) => {
        console.log(element.pageX)
        _x = element.pageX
        _y = element.pageY
        let pos =  { x: _x, y: _y }
        return pos
    })
}

// Get coords of an un-click
function getUnClick() {
    let _x = null
    let _y = null 
    document.addEventListener('mouseup', (element) => {
        console.log(element.pageX)
        _x = element.pageX
        _y = element.pageY

        let pos =  { x: _x, y: _y }
        return pos
    })
}


let click_box = document.querySelector('#click-box-template')
let clone = click_box.content.cloneNode(true)

let _mouse_is_down = false
let _mouse_hit = { x: 0, y: 0}
document.body.append(clone)
click_box = document.querySelector('.click-box')
click_box.toggleAttribute('hidden')

click_box.reset = function(element) {
    click_box.toggleAttribute('hidden')
    console.log('need to reset')
    click_box.style.left = `${element.pageX}`
    click_box.style.top = `${element.pageY}`
    click_box.style.width = `0px`
    console.log('1')

    click_box.style.height = `0px`
}

document.addEventListener('mouseup', (element) => {
    _mouse_is_down = false
    click_box.reset(element)

})

document.addEventListener('mousemove', (element) => {
    sleep(25)
    if(!_mouse_is_down)
        return
    click_box.style.position = 'absolute'
    click_box.style.left = `${_mouse_hit.x}`
    click_box.style.top = `${_mouse_hit.y}`
    if(element.pageX + _mouse_hit.x < 0) {
        console.log('flip')
    }
    console.log('move event')

    // click_box.style.width = `${_mouse_hit.x + element.pageX}px`
    // click_box.style.height = `${_mouse_hit.y + element.pageY}px`
    // console.log(`${element.pageX - _mouse_hit.x }px ${element.pageY - _mouse_hit.y }px`)
    // click_box.style.width = `${_mouse_hit.x + element.pageX }px`
    // click_box.style.height = `${ _mouse_hit.y + element.pageY }px`
    // console.log(`${element.pageX } ${ _mouse_hit.x } ${element.pageY} ${_mouse_hit.y }`)

    click_box.style.width = `${_mouse_hit.x + element.pageX - _mouse_hit.x }px`
    click_box.style.height = `${_mouse_hit.y + element.pageY - _mouse_hit.x }px`

    console.log(`x: ${_mouse_hit.x + element.pageX - _mouse_hit.x }px\n`)
    console.log(`y: ${_mouse_hit.y + element.pageY - _mouse_hit.x }px`)
})


// after a click, if mouse is down, set click_box.style.lef

document.addEventListener('mousedown', (element) => {
    click_box.toggleAttribute('hidden')
    console.log('far')
    _mouse_hit = { x: `${element.pageX}`, y: `${element.pageX}` } 
    _mouse_is_down = true
    // console.log(_mouse_hit)
    // click_box = document.querySelector('.click-box')
    click_box.style.position = 'absolute'
    click_box.style.left = `${element.pageX}px`
    click_box.style.top = `${element.pageY}px`
    console.log('mouse down event')

    // click_box.style.width = `${element.pageX + _mouse_hit.x}px`

    // click_box.style.height = `${element.pageY + _mouse_hit.y}px`

    // console.log(`${element.pageX } ${ _mouse_hit.x }px ${element.pageY} ${_mouse_hit.y }px`)
    
    // click_box.style.width = `${_mouse_hit.x }px`
    // click_box.style.height = `${_mouse_hit.y }px`
    

    // click_box.style.width = `${_mouse_hit.x + element.pageX }px`
    // click_box.style.height = `${ _mouse_hit.y + element.pageY }px`
    // click_box.style.width = `${element.pageX }px`
    // click_box.style.height = `${element.pageY }px`

})

