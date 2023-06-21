var myImage = document.querySelector('img');
var images = ['img/Form111.png', 'img/Form112.png', 'img/form3.png', 'img/Form114.png'];
var currentIndex = 0;

myImage.onclick = function() {
  currentIndex = (currentIndex + 1) % images.length;
  myImage.setAttribute('src', images[currentIndex]);
};

var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Как вас зовут?');
  sessionStorage.setItem('name', myName);
  if (myName === null || myName === '') {
    myHeading.textContent = 'Здравствуйте, Пользователь!';
  } else {
    myHeading.textContent = 'Здравствуйте, ' + myName + '!';
  }
}

if (!sessionStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = sessionStorage.getItem('name');
  myHeading.textContent = 'Здравствуйте, ' + storedName + '!';
}

alert("Автор не несет ответственность за моральный/психологический ущерб, нанесенный данным оформлением.");
