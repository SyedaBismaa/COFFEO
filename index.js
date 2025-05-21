
var html = document.querySelector('html');
var body = document.querySelector('body');

var dark = document.getElementById('dark');

let icon = document.querySelectorAll('.heart-icon');


var them=0;
dark.addEventListener('click', ()=>{
    // console.log('Hello')
  
    if(them==0){
         body.style.backgroundColor= 'gray';
        html.style.backgroundColor= 'gray';
           dark.innerHTML=' Light Mode'
         them=1;
    }else{
         body.style.backgroundColor= 'white';
          html.style.backgroundColor= 'white';
           dark.innerHTML=' Dark Mode'
         dark.style.color='#000'
         them=0;
    }
    
  
    dark.style.cursor='pointer'
    
})


icon.forEach((icon) => {
     var val=0;
icon.addEventListener('click',()=>{
    if(val==0){
        icon.innerHTML='❤️'
        val=1;
    }else{
        icon.innerHTML='🤍'
        val=0;
    }
})
});
