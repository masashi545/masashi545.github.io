const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/misaka.jpg') {
        myImage.setAttribute('src', 'images/misaka-sekimen.jpg');
    } else {
        myImage.setAttribute('src', 'images/misaka.jpg');
    }
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('あなたの名前を入力してください。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '御坂さんは、' + myName + 'が大好き!';
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '御坂さんは、' + storedName + 'が大好き!';
}

myButton.onclick = function () {
    setUserName();
}
