let textbox = document.getElementById("textbox");
let lowercase = document.getElementById("lowercaseAlphabet");
let uppercase = document.getElementById("uppercaseAlphabet");
let Numbers = document.getElementById("numbers");
let Symbols = document.getElementById("symbols");

let Display = document.getElementById("Result");




function RandomPasswordGenerator(){

    let PasswordLength = Number(textbox.value);
    let IsLowerCaseAlphabet = lowercase.checked;
    let IsUpperCaseAlphabet = uppercase.checked;
    let IsNumber = Numbers.checked;
    let IsSymbol = Symbols.checked;


    let LowerChars = "abcdefghijklmnopqrstuvwxyz";
    let UpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let NumberChars = "1234567890";
    let SymbolChars = "~!@#$%^&*()-_=+"

    let allowedChars = "";
    let Password = "";
     
    allowedChars += IsLowerCaseAlphabet ? LowerChars : "";
    allowedChars += IsUpperCaseAlphabet ? UpperChars : "";
    allowedChars += IsNumber ? NumberChars : "";
    allowedChars += IsSymbol ? SymbolChars : "";


    for(let i=0; i<PasswordLength; i++){
        let RandomNum = Math.floor(Math.random() * allowedChars.length);
        Password += allowedChars[RandomNum];
    }

    Display.textContent = `Your Generated Password is : ${Password}`;
}
