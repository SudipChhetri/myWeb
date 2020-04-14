// Changing the color of navigation bar on scroll
var nav= document.querySelector('.navbar');
window.onscroll=function(){
    var val= window.scrollY;
    this.console.log(val);
    if(val>617 && val<=1700){
        nav.classList.add("scroll1");
    }else if(val>1800 ){
        nav.classList.add("scroll2");
    }else{
        nav.classList.remove('scroll1');
        nav.classList.remove("scroll2");
    }
    
};