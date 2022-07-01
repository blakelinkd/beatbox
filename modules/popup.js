export default function popup(element) {
    var _popup_proto = document.querySelector('.popup')
    let position = element.target.getBoundingClientRect()
    let _popup_choice =  document.querySelector('#select-choice')
    let _popup_button = document.querySelector('#form-input-button')
    _popup_button.addEventListener('click', (element) => {
        console.log(_popup_choice.value)
    })
    _popup_proto.style.left = `${position.left + 15}px`
    _popup_proto.style.top = `${position.top}px`
    _popup_proto.toggleAttribute('hidden')

}