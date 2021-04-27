const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// I have select the button and 
// I have to change the span means color name or number

const button=document.getElementById("btn");
const color=document.querySelector(".color")

button.addEventListener("click",function(){
     
     let randonum=getRandomnum();

    document.body.style.backgroundColor=colors[randonum]
    
    color.textContent=colors[randonum]
 

})

const getRandomnum=()=>{
     return Math.floor(Math.random()*colors.length)
}