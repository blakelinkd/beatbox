import popup from './modules/popup.js'
var block = document.querySelector('.block')


for(let i = 0; i < 100; i++) {
    let _proto_block = block.cloneNode(true)
    _proto_block.toggleAttribute('hidden')
    _proto_block.addEventListener('click', (element) => { 
        popup(element)
    })
    if(i % 3 == 0)
        _proto_block.style.backgroundColor = 'red'
    if(i % 4 == 0)
        _proto_block.style.backgroundColor = '#39FF75'
    if(i % 5 == 0)
        _proto_block.style.backgroundColor = '#4E99FE'

    graph.append(_proto_block)
}