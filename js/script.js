var hoverBoard=document.querySelector('#hoverboard-screen .custom-container')

function AddBoxElements(){
    box=document.createElement('div')
    box.classList.add('box')
    box.setAttribute('onmouseenter',"hoverIn(this)")
    box.setAttribute('onmouseleave',"hoverOut(this)")
    hoverBoard.appendChild(box)
}

function hoverIn(element){
    color=`rgba(${(Math.floor(Math.random()*255))}, ${(Math.floor(Math.random()*255))}, ${(Math.floor(Math.random()*255))})`
    element.style.backgroundColor=color
    element.style.boxShadow=`0px 0px 3px 1px ${color}`
    // element.style.transition="all 0.1s"
}
function hoverOut(element){
    element.style.backgroundColor="rgb(35, 35, 35)"
    element.style.boxShadow="0px 0px 3px 1px rgba(250, 170, 0, 0)"
    // element.style.transition="all 3s"
}
for(var i=0; i<399;i++){
    AddBoxElements()
}