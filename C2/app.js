const container = document.querySelector('.container')
const circle = document.querySelector('.circle')
var size = 50

container.addEventListener('mousemove', function(e){
    c = container.getBoundingClientRect()
    circle.style.left = e.clientX  - c.x  + 'px'
    circle.style.top = e.clientY  - c.y + 'px'
})

container.addEventListener('wheel', function(e){
    if(e.deltaY < 0){
        size += 5

    }else{
        size -= 5
    }

    size = size < 10 ? 10 : size

    circle.style.width =  size + 'px'
})