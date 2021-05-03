var slides = document.querySelectorAll(".homepage");
    var x=1;
    show();

    function next1(){
        x+=1;
        show();
    }
    function prev1(){
        x-=1;
        show();
    }

    function show(){
        var i;
        // x++;
     if(x<1){x=slides.length}
     if(x> slides.length){x=1}
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    
    }

    slides[x-1].style.display="block";
    // setTimeout(show,5000);
    }

