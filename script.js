let statusTxt = document.querySelector(".status-text");
let userInput = document.getElementById("user-input");

function getCaptcha() {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  const uppercaseAlphabet = [
    ...alphabet.toString().toUpperCase().replaceAll(",", ""),
  ];
  const num = [..."0123456789"];
  const all = [...alphabet, ...uppercaseAlphabet, ...num];
  let captcha = [];
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * all.length);
    captcha += all[randomIndex];
  }
  document.getElementById("captcha-txt").innerText = captcha;

  //one random capital letter //7
  // let str = "";
  // let captcha = Math.random().toString(36).substring(2, 8); //0~9 a~z
  // let randomIndex = Math.floor(Math.random() * 6);
  // if (isNaN(captcha[randomIndex])) {
  //   let split = captcha.split("");
  //   let capChar = captcha[randomIndex].toUpperCase(); //any one of A~Z
  //   split[randomIndex] = capChar;
  //   str = split.toString().replaceAll(",", "");
  // } else {
  //   str = captcha;
  // }
  // console.log(str);

  // another way to get a to z //
  // let alphabet = [];
  // for (var i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
  //   let aToz = String.fromCharCode(i);
  //   alphabet.push(aToz);
  // }
  // console.log(alphabet);
}

window.onload = getCaptcha();
document.querySelector(".reload").addEventListener("click", getCaptcha);

function checkCaptcha() {
  let captcha = document.getElementById("captcha-txt").innerText;
  if (captcha == userInput.value) {
    alert("valid CAPTCHA");
  } else {
    statusTxt.style.display = "block";
    statusTxt.innerText = "CAPTCHA not matched. Please try again!";
    userInput.addEventListener("keydown", () => {
      statusTxt.innerText = "";
      return;
    });
  }
}

document.getElementById("check-btn").addEventListener("click", checkCaptcha);
