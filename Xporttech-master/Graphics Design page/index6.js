var slides = document.querySelectorAll(".client-icons");
    var x=1;
    show();

    function next2(){
        x+=1;
        show();
    }
    function prev2(){
        x-=1;
        show();
    }

    function show(){
        var i;
     
     if(x<1){x=slides.length}
     if(x> slides.length){x=1}
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    
    }

    slides[x-1].style.display="block";
   
    }