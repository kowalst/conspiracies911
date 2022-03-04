$(document).ready(function(){
    /* lightbox */
    baguetteBox.run('.gallery', {
        animation: 'fadeIn'
    });
});

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
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
