
let randomNum = Math.floor(Math.random() * 10) + 1;
let attempt = 0;
//<<<<------------Random Number-------------->>>>

function response() {
    let userNum = document.getElementById("userNum").value;
    let response = document.getElementById('response');
    attempt++;

    if (userNum === randomNum) {
        response.textContent = `Congratulation! You guess the right number: ${userNum}`;
        response.style.color = "green";
    }
    else if (userNum == "") {
       alert(`Enter a value`)
        // response.style.color = "blue";
    }
    else if (userNum > randomNum) {
        response.textContent = `Ups! Your guess Number ${userNum} is too hight, PLease try Again.`;
        response.style.color = "red";
    }
    else if (userNum < randomNum) {
        response.textContent = `Ups! Your guess Number ${userNum} is too low, PLease try Again.`;
        response.style.color = "red";
    }
  

    document.getElementById("attempt").innerText = `Attempts: ${attempt}`;
}
function reset(){
    document.getElementById("userNum").value= "";
    document.getElementById("response").innerText= "";
    document.getElementById("attempt").innerText= "";
}