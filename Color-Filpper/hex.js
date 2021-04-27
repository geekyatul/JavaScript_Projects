const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button=document.getElementById("btn");
const color=document.querySelector(".color")

button.addEventListener("click",function(){
     
     let hexval="#"

     for(let i=0;i<6;i++)
     {
         hexval+=hex[getRandomnum()];
     }
     

    document.body.style.backgroundColor=hexval
    
    color.textContent=hexval
 

})

const getRandomnum=()=>{
     return Math.floor(Math.random()*hex.length)
}

// here I have to make logic how we will make color 