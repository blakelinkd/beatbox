console.log('hello needle')

let needle = document.querySelector('.needle')
let graph = document.querySelector('.graph')

let rect = graph.getBoundingClientRect()

_x = rect.top
_y = rect.left
console.log(`_x: ${_x}`)
_graph_width = graph.offsetWidth;
_day_seconds = 24 * 60 * 60



async function demo(ticks) {
    _starting_point = _x
    while(_x < ticks) {
        ticks = graph.offsetWidth
        await sleep(1 * 25)
        needle.style.position = 'absolute'
        needle.style.left = `${_x++}px`
        if(_x >= ticks) 
            _x = _starting_point
    }
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
console.log(`graph width: ${_graph_width} _X: ${_x} _Y: ${_y}`)
demo(_graph_width)
