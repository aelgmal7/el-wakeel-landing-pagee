console.log("hellow")
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  document.getElementById("myBtn").addEventListener('click',function(){

      window.scrollTo({
          top:0,
          behavior:"smooth"
        })
    })