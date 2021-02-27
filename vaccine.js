document.addEventListener("DOMContentLoaded",function (){
    let images = [document.querySelector('#image-1'),
                    document.querySelector('#image-2'),  
                    document.querySelector('#image-3')];
    for(let i = 0;i < 3;i++){
        images[i].style.visibility = "hidden";
    }
    let slider1 = document.querySelector('#button-left');
    let slider2 = document.querySelector('#button-right');
    let shown = 0;
    images[shown].style.visibility = "visible";
    window.setInterval(function(){
    images[shown].style.visibility = "hidden";
    if(shown == 2){
        shown = 0;
    }
    else{
        shown++;
    }
    images[shown].style.visibility = "visible";
    },2500);
    slider1.addEventListener('click',function(){
        images[shown].style.visibility = "hidden";
    if(shown == 0){
        shown = 2;
    }
    else{
        shown -= 1;
    }
    images[shown].style.visibility = "visible";
    })
    slider2.addEventListener('click',function(){
        images[shown].style.visibility = "hidden";
    if(shown == 2){
        shown = 0;
    }
    else{
        shown++;
    }
    images[shown].style.visibility = "visible";
    })
})

