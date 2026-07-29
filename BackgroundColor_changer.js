const buttons = document.querySelectorAll(".button")

const body = document.querySelector("body")



buttons.forEach( (button) => {
  console.log(button);

  button.addEventListener('click' , function(e){
    console.log(e);
    console.log(e.target);
 
    function event_target(color){

        if(color === 'black'){
          body.style.color="white";
          body.style.backgroundColor = color;
        }
        else{
        body.style.backgroundColor = color;
        body.style.color="black";}
    } 

    event_target(e.target.id)
  
  })
})