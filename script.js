/*Global variables*/
let score = [0,0];


function main(){
let winner = "";
let rounds = setRounds();
for (let round = 1; round <= rounds; round ++){
winner = rpsRound();
score[winner]++;
}
alert ("you have " + score[0] + " and I have  " + score[1]);

}

    function setRounds(){
    let rounds = prompt("Number of rounds?");
    if (rounds % 2 == 0){
     alert("Must be odd,try again");
    return setRounds();
}
  return rounds;
}
/*RPS Round
*Plays a round of RPS and tells the winner.
*Returns index (0,1) in score for the winner.
* param: none
* return: winner (0 or 1)
*/
    function rpsRound(){
        let u = "";
        let c = "";
        while (u==c){
            u = userTurn();
            c = cpuTurn();
            if (u==c)alert("we both choose "+c);
            }
    winner = findWinner(u,c);
        alert("You choce "+ u + " and I chose " + c + ", so " + winner + " won !");
        let winValues = ["You","I"];
        winner = winValues.indexOf(winner);
        return winner;
        }
     /*userTurn
    *user can chose r, p, or s .If bad Input, give new choice.
    *@param:none
    *return:choise
    */
    function userTurn(){
        let choice = prompt("enter r, p, or s.");
       const letters = ["r","p","s"];
        if (!letters.includes(choice)){
             alert("invalid input");
        return userTurn();
    }
    return choice;
}
/*cpuTurn chooses a random number 0-2,returns the associated RPS move.
*@param:none
    *return:choise
    */
    function cpuTurn(){
    let choice = Math.floor(Math.random()*3);
    let moves = ["r","p","s"];
        return moves[choice];
    }
/* findWinner(u,c)
*Takes user and computerns turn
*Decides who is winner is
*Return winner
*@param:u,c
 *return:winner
 */
    function findWinner(u,c){
        let combo = u + c;
        let match = "";
        let winner = "";
        let winArray = [["r","p","I",],["r","s","You"],["s","r","I"],["p","r","You"],["p","s","I"],["s","p","You"]];
         for( i = 0; i < winArray.length; i++){
            match = winArray[i][0] + winArray[i][1];
            if (match==combo){
              winner = winArray[i][2];  
            }
        
         }
         return winner;
        }
    

   