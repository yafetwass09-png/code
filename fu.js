let pic= [
    "ax.jpg",
     "ethio.jpg",
    "lal.jpg",
    "fas.jpg"
];
let number = 0
function afterthat() {
    number++
    if (number >=pic.length){
        number = 0;
    }
    document.getElementById("ax").src = pic[number];
}    

function haveagoodday() {
    alert("Thanks for visiting! Have a good day ");
}

let colors= [
    "#ee0505ff",
    "#3ce608ff",
    "#f0e008ff"
];
let index = 1
function changebackground() {
    index++
    if (index >=colors.length){
        index = 0;
    }
    document.body.style.backgroundColor=colors[index]
}    

function greetUser() {
    const name = document.getElementById("nameInput").value;
    const grt= document.getElementById("gtxt");
    grt.innerText= "Hello " + name + "!";
}

function inpt() {
    const respond = document.getElementById("inputwhatyouknow").value.toLowerCase();
    const answer = document.getElementById("there knowledge about ethiopia")
        if(respond == "yes" ) {
            answer.innerText ="Yessirrr, Ethiopia be iconic."
        }
        else if( respond == "no")  {
            answer.innerText= "you should know a lot. Ethiopia is a country with a lot of intersting history."
        } 
        else {
            answer.innerText="Please respond only with yes or no."
        }
 }    