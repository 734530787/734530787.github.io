var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/chorm-icon2.jpg') {
      myImage.setAttribute('src', 'images/chorm-icon0.jpg');
    } else {
      myImage.setAttribute('src', 'images/chorm-icon2.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName=prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent='Chorme is cool,'+myName;
}
if(!localStorage.getItem('name')){
setUserName();
}
else{
    var storedName=localStorage.getItem('name');
    myHeading.textContent='Chorme is cool,'+storedName;
}

myButton.onclick = function() {
    setUserName();
  }




