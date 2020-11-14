

// function expression to select elements

const selectElement = (s) => document.querySelector (s);

// open the menu on click

selectElement('.open').addEventListener('click', () => {
  selectElement('.nav-list').classList.add('active');
});

// close the menu on click
 
selectElement('.close').addEventListener('click',  () => {
  selectElement('.nav-list').classList.remove('active');


});



// testimonials

var index = 1;
showdiv(index);
function getdiv(n) {
  showdiv(index +=n);
}

function showdiv(n){
  var i;
  var a = document.getElementsByClassName('testimonial-text-box')

  if (n > a.length){
    index = 1;
  }

  if (n < 1){
    index = a.length;
  }
  for (i=0; i<a.length; i++){
    a[i].style.display = 'none';
  }
  a[index-1].style.display = 'block';

}



