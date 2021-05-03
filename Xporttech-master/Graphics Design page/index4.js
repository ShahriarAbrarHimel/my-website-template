var slide=document.querySelectorAll(".boxes");
var x=0;
show();

function next(){
    show();
    x+=1;
}
function prev(){
    show();
    x-=1;
}

function current1(){
x=0;
show();

}
function current2(){
    x=1;
    show();
    
}


function show(){
    var i;
    x++;
    
    if(x<1){x=slide.length}
    if(x>slide.length){x=1}
       
    for(i=0;i<slide.length;i++){
        slide[i].style.display="none";
    }


    slide[x-1].style.display="block";
    setTimeout(show,4000);
}