// let map = function(arr,fn){

//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         res.push(fn(arr[i],i));
//     };
//     return res;
// };
// console.log(map([1,2,3],(n,p)=>{return n+p}));

// //function plusone(n) { return n + 1; }
// //function plusI(n, i) { return n + i; }
let p1 = 0;
let p2 = 0;
let playToScore = 7;
function updateScore(player) {
    if (player == "p1") {
        p1++;
    }
    if (player == "p2") {
        p2++;
    }
    score.innerText = `${p1} to ${p2}`;
    if (p1 == playToScore || p2 == playToScore) {
            score.innerText = `${player} is the winner `;
            p1Button.disabled=true;
            p2Button.disabled=true;
        }
}

const p1Button = document.getElementById('p1-green');
const p2Button = document.getElementById('p2-blue');
const resetButton = document.getElementById('reset-red');
const score = document.getElementById('score');
const playTo = document.getElementById('up_to_score');
p1Button.addEventListener('click', function () { updateScore("p1");});
p2Button.addEventListener('click', function () { updateScore("p2"); });
resetButton.addEventListener('click', () => { p1 = 0; p2 = 0;p1Button.disabled=false;p2Button.disabled=false; score.innerText = `${p1} to ${p2}` });
playTo.addEventListener('change',(event)=>{playToScore=event.target.value;console.dir(event)});