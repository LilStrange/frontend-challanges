var rangeInput = document.querySelector('#password-length');
var passwordLength = document.querySelector('#password-length-info');

var display = document.querySelector('#display');

var generateButton = document.querySelector('#generate-password');

function changeLengthNumber(){
    passwordLength.textContent = 'Length: ' + rangeInput.value;
}

rangeInput.addEventListener('input', changeLengthNumber);

function random(min, max){
    return Math.random() * (max - min) + min;
}

function generatePassword(){
    //Settings
    var settings = {
        uppercase: document.querySelector('#include-uppercase').checked,
        numbers: document.querySelector('#include-numbers').checked,
        symbols: document.querySelector('#include-symbols').checked
    }

    var characters = {
        lowercase: 'qwertyuiopasdfghjklzxcvbnm',
        uppercase: 'QWERTYUIOPASDFGHJKLZXCVBNM',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_-+=;:\'"?.,'
    }

    var finalCharacters = characters.lowercase;
    if(settings.uppercase) finalCharacters = finalCharacters.concat(characters.uppercase);
    if(settings.numbers) finalCharacters =  finalCharacters.concat(characters.numbers);
    if(settings.symbols) finalCharacters =  finalCharacters.concat(characters.symbols);

    var password = '';
    for(var i = 0; i < rangeInput.value; i++){
        password += finalCharacters.charAt(random(0, finalCharacters.length));
    }

    display.value = password;
}

generateButton.addEventListener('click', generatePassword);