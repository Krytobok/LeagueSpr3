var myImage = document.querySelector('img');
var images = ['img/Form111.png', 'img/Form112.png','img/Form3.png','img/Form114.png'];
var currentIndex = 0;

myImage.onclick = function() {
  currentIndex = (currentIndex + 1) % images.length;
  myImage.setAttribute('src', images[currentIndex]);
};


var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Как вас зовут?');
  sessionStorage.setItem('name', myName);
  myHeading.textContent = 'Здравствуйте, ' + myName + '!';
}

if (!sessionStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = sessionStorage.getItem('name');
  myHeading.textContent = 'Здравствуйте, ' + storedName + '!';
}
alert("Автор не несет ответсвенность за моральный/психологический ущерб нанесенный данный оформлением.");