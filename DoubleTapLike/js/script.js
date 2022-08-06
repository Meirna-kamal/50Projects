var contentSection=document.getElementById("content-container")
var likeCounter=document.querySelector(".likeCounter")
var counter=0
function mouseCoordinates(element){
    var xCoordinate=element.clientX
    var yCoordinate=element.clientY
    createHeartLike(xCoordinate,yCoordinate)
 
}
function createHeartLike(x,y){
    counter++
    likeCounter.innerText=`${counter}`
    var heart=document.createElement('i')
    heart.classList.add('fa-solid','fa-heart','heart-like')
    heart.style.top=`${y}px`
    heart.style.left=`${x}px`
    contentSection.appendChild(heart)
}