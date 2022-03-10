//$(document).ready(function(){
//    /* lightbox */
//    baguetteBox.run('.gallery', {
//        animation: 'fadeIn'
//    });
//});

function formValidator(){
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    if(name ==''){
        alert("Enter a valid name.");
        document.getElementById('name').style.borderColor="red";
        return false;
    }
    if(phone ==''){
        alert("Enter a valid phone number.");
        document.getElementById('phone').style.borderColor="red";
        return false;
    }
    if(email ==''){
        alert("Enter a valid email.");
        document.getElementById('email').style.borderColor="red";
        return false;
    }
    else{
        alert("Thank you for contacting us. We will get back to you as soon as possible!");
        document.getElementById('name').style.borderColor="#7898C9";
        return true;
    }
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
//  slides[slideIndex-1].style.display = "block";
//  dots[slideIndex-1].className += " active";
//  captionText.innerHTML = dots[slideIndex-1].alt;
}


// Get the modal
var modal0 = document.getElementById("myModal0");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var smimg0 = document.getElementById("smimg0");
var smimg1 = document.getElementById("smimg1");
var smimg2 = document.getElementById("smimg2");
var smimg3 = document.getElementById("smimg3");
var smimg4 = document.getElementById("smimg4");
var smimg5 = document.getElementById("smimg5");

var modalImg0 = document.getElementById("img0");
var modalImg1 = document.getElementById("img1");
var modalImg2 = document.getElementById("img2");
var modalImg3 = document.getElementById("img3");
var modalImg4 = document.getElementById("img4");
var modalImg5 = document.getElementById("img5");

smimg0.onclick = function(){
  modal0.style.display = "block";
  modalImg0.src = "images/datav0.png";
}
smimg1.onclick = function(){
    modal1.style.display = "block";
    modalImg1.src = "images/datav1.png";
}
smimg2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = "images/datav2.png";
}
smimg3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = "images/datav3.png";
}
smimg4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = "images/datav4.png";
}
smimg5.onclick = function(){
    modal5.style.display = "block";
    modalImg5.src = "images/datav5.png";
}

// Get the <span> element that closes the modal
var span0 = document.getElementsByClassName("close0")[0];
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];

// When the user clicks on <span> (x), close the modal
span0.onclick = function() {
    modal0.style.display = "none";
} 
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
span4.onclick = function() {
    modal4.style.display = "none";
}
span5.onclick = function() {
    modal5.style.display = "none";
}