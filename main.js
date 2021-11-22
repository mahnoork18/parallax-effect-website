const div =document.querySelector('.container');

window.addEventListener('scroll', () =>{
    div.style.backgroundPositionY = `${scrollY/ 1.5}px`
})