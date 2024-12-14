const list =document.querySelector('.toggle-menu-list')
const icon=document.querySelector('.toggle-menu-icon')
icon.addEventListener('click', function (e) {
list.classList.toggle('open')
    icon.classList.toggle('fa-close')
    e.stopPropagation() // Stop the event from bubbling up to the document level listener
})
