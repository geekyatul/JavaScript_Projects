// we have select the button and the text 

//decrease">decrease</button>
  //    <button class="btn reset">reset</button>
    //  <button class="btn increase

const value=document.querySelector("#value")
const btns=document.querySelectorAll(".btn")
let count=0;
btns.forEach(function(btn){
   btn.addEventListener("click",function(event){
        const whichbtn=event.currentTarget.classList;
        if(whichbtn.contains("decrease"))
        {
             count=count-1;
             value.textContent=count;   
        }
        else if(whichbtn.contains("increase"))
        {
            count=count+1;
            value.textContent=count;
        }
        else if(whichbtn.contains("reset"))
        {
            count=0;
            value.textContent=count;
        }

        if(count>0)
        {
            value.style.color="green"

        }
        if(count<0)
        {
            value.style.color="red";
        }
        if(count==0)
        {
            value.style.color="black";
        }


   })

})