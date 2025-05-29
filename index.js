let boxes = document.querySelectorAll(".box");
let rest = document.querySelector("#reset-button");
let msg = document.querySelector("#msg");
let turn = true;
let winning = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
rest.addEventListener("click",()=>{
    boxes.forEach((box) => {
        box.innerText = "";
        msg.innerText = "";
        box.disabled=false;
    });
});

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn==true){
            box.innerHTML = "X"
            turn = false;
        }else{
            box.innerHTML = "O"
            turn = true;
        }
        console.log("Button clicked");
        box.disabled = true;
        findwinner();
    });
});
const findwinner=() =>{
    for(let pattern of winning){
        let pos1 =boxes[pattern[0]].innerText;
        let pos2 =boxes[pattern[1]].innerText;
        let pos3 =boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2 && pos2 === pos3){
                showwinner(pos1);
                console.log("winner is ",pos1);
            }
        }
    }
}
const showwinner=(winner1)=>{
    msg.innerText = `Congraulations ! ${winner1} Won the Game`;
}
const fetchJoke = async() =>{
    let responsen = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await responsen.json();
    let joke = data.setup +" "+ data.punchline;
    let j = document.querySelector("#joke");
    j.innerText = joke;
}
fetchJoke();