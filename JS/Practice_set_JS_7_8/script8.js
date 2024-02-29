let text = document.querySelector("#text");

function getData(){
    let userNUM = prompt("Guess the Game Number");
    gameNum = 85
    while(userNUM != gameNum){
        userNUM = prompt("Guess the Game Number again");
        
    }
    text.innerHTML = `You Win!  You Guess Rigth number : ${userNUM}`;
}

