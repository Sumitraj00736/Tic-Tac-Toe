let turn = "X";
var isgameover = false;
let clickSound= new Audio("click.mp3");
let WonSound= new Audio("won.mp3");

const ChangeTurn = ()=>{
    return (turn=== "X" ? "0" : "X")
}

function reset()  {
    location.reload();
}

const checkWin = ()=>{
    let boxtext =document.getElementsByClassName("boxtext");
 let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  win.forEach(e =>{
   
    if((boxtext[e[0]].innerText ===boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
        document.querySelector('#turn').innerHTML =boxtext[e[0]].innerText  +"'s won";
        WonSound.play();
        isgameover = true;

    }
  })

}



let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
   let boxtext = element.querySelector('.boxtext');
   element.addEventListener('click', ()=>{
    if (boxtext.innerText === ''){
        boxtext.innerText = turn;
        turn = ChangeTurn();
        clickSound.play();
        checkWin();
        if(!isgameover){
            document.getElementById("turn").innerHTML = "Turn for " + turn;
        }
    }
})
})

