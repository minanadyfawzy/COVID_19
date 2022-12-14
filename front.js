
// var nav = document.querySelector('top_bar'); // Identify target

// window.addEventListener('scroll', function(event) { // To listen for event
//     event.preventDefault();

//     if (window.scrollY <= 150) { // Just an example
//         nav.style.backgroundColor = '#000'; // or default color
//     } else {
//         nav.style.backgroundColor = 'transparent';
//     }
// });

// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 150) {
//           $(".top_bar").css("background" , "blue");
//         }

//         else{
//             $(".top_bar").css("background" , "#333");  	
//         }
//     })
//   });


// var top_bar = document.getElementById('top_bar');
// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 200 ) {
//         top_bar.classList.add("nav-colored");
//         top.classList.remove("nav-transparent");
//     } 
//     else {
//         top_bar.classList.add("nav-transparent");
//         top_bar.classList.remove("nav-colored");
//     }
// };






function myFunction() {
  var m = document.getElementById("articles_10");
    var f = document.getElementById("flex_10");
    var y =  document.getElementById("minus");
    var z =  document.getElementById("plus");
    var x = document.getElementById("para_of_10");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display= "inline";
      z.style.display= "none";
      f.style.color= "blue";
      m.style.color= "blue";
      m.style.border= "2px solid blue";
      

    } else {
      x.style.display = "none";
      y.style.display= "none";
      z.style.display= "inline";
      f.style.removeProperty("color");
      m.style.removeProperty("color");
      m.style.removeProperty("border");
    }
  }
  function myFunction_1() {
    var m = document.getElementById("articles_10_1");
    var f = document.getElementById("flex_10_1");
    var y =  document.getElementById("minus_1");
    var z =  document.getElementById("plus_1");
    var x = document.getElementById("para_of_10_1");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display= "inline";
      z.style.display= "none";
      f.style.color= "blue";
      m.style.color= "blue";
      m.style.border= "2px solid blue";

    } else {
      x.style.display = "none";
      z.style.display= "inline";
      y.style.display= "none";
      f.style.removeProperty("color");
      m.style.removeProperty("color");
      m.style.removeProperty("border");
    }
  }
  function myFunction_2() {
    var m = document.getElementById("articles_10_2");
    var f = document.getElementById("flex_10_2");
    var y =  document.getElementById("minus_2");
    var z =  document.getElementById("plus_2");
    var x = document.getElementById("para_of_10_2");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display= "inline";
      z.style.display= "none";
      f.style.color= "blue";
      m.style.color= "blue";
      m.style.border= "2px solid blue";
    } else {
      x.style.display = "none";
      z.style.display= "inline";
      y.style.display= "none";
      f.style.removeProperty("color");
      m.style.removeProperty("color");
      m.style.removeProperty("border");
      
    }
  }
  function myFunction_3() {
    var m = document.getElementById("articles_10_3");
    var f = document.getElementById("flex_10_3");
    var y =  document.getElementById("minus_3");
    var z =  document.getElementById("plus_3");
    var x = document.getElementById("para_of_10_3");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display= "inline";
      z.style.display= "none";
      f.style.color= "blue";
      m.style.color= "blue";
      m.style.border= "2px solid blue";
    } else {
      x.style.display = "none";
      z.style.display= "inline";
      y.style.display= "none";
      f.style.removeProperty("color");
      m.style.removeProperty("color");
      m.style.removeProperty("border");
    }
  }



