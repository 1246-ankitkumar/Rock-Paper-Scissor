let userScore=0;
let comScore=0;
let choices=document.querySelectorAll(".choice");


const msg=document.querySelector("#msg");
let userScoreP=document.querySelector("#user-score");
let compScoreP=document.querySelector("#comp-score");



const drowGame=() =>{
    console.log("game was drow");
    msg.innerText="Game was drown ! Play Again";
}

const showWinner=(UserWin,userChoice,compChoice)=>{
    if(UserWin){
        userScore++;
        console.log("you win ")
        msg.innerText=`You Win| your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScoreP.innerText=userScore;
    }
    else{
        comScore++;
        console.log("you loose");
         msg.innerText=`You Loss  | Computer ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        compScoreP.innerText=comScore;
        
    }
}


  const gameCompChoice = () =>{
    let options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
  }

    const playGame=(userChoice) => {
        console.log("user choice = ",userChoice);
        const compChoice =gameCompChoice();
        console.log("computer Choice : ",compChoice);

        if(userChoice==compChoice){
            drowGame();
        }

        else{
            let userWin=true;
            if(userChoice==="rock"){
                userWin=compChoice==="paper"?false:true;

            }
            else if(userChoice=="paper"){
                userWin=compChoice==="scissor"?false:true;
            } else if (userChoice==="scissor"){
                userWin=compChoice==="rock"?false:true;
            }

            showWinner(userWin,userChoice,compChoice);
        }

    }
   
   
    choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    });

});

