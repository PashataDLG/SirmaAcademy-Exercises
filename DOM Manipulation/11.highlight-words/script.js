// get all anchors tags
const anchorElements = document.querySelectorAll('a.hovered-effect');

// go trough each of them so we can add two listener for mouseover and for mouseout
anchorElements.forEach(a => {
    a.addEventListener('mouseover', () => {
        a.classList.add('hovered');
    })

    a.addEventListener('mouseout', () => {
        a.classList.remove('hovered')
    })
})