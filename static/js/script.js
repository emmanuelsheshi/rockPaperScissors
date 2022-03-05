// challagne on age in days

function ageInDays(){

let birthyear = prompt('what year were your born...');

let days = (2022-birthyear)*365;


let h1 = document.createElement('h1');

let ans = document.createTextNode('you are ' + days + ' days');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(ans);
document.getElementById("flex-box-result").appendChild(h1);

}

function reset(){

document.getElementById("ageInDays").remove();

}// end of the fucntion

