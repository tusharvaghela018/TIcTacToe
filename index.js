console.log("welcome to tic tac toe")

let music = new Audio("music.mp3")

let audioTurn = new Audio("ting.mp3")

let gameover = new Audio("gameover.mp3")

let turn = "X"

let isgameover = false

let gameReset = document.getElementsByTagName("button")[0]

// function to change the turn

const changeTurn = ()=>{
    return turn==="X"?"0": "X"
}

//function to check win

const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName("boxtext")
    let wins=[
        [0,1,2,2.5,5,0],
        [3,4,5,2.5,15,0],
        [6,7,8,2.5,25,0],
        [0,3,6,-7.5,15,90],
        [1,4,7,2.5,15,90],
        [2,5,8,12.5,15,90],
        [0,4,8,2.3,14.5,45],
        [2,4,6,2.3,15.1,135]
    ]

    let isDraw = true

    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector(".info").innerText ="Congratulations ! "+ boxtexts[e[0]].innerText+ " Won"

            if(isgameover = true){
                gameover.play()
                document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px"
                setTimeout(() => {
                    reset()
                }, 3000);
            }
            
        }
    })

    for (let i = 0; i < boxtexts.length; i++) {
        if (boxtexts[i].innerText === "") {
            isDraw = false; // If there's an empty box, it's not a draw
            break;
        }
    }

    if (isDraw && !isgameover) {
        document.querySelector(".info").innerText = "It's a Draw!";
        isgameover = true;
        gameover.play()
        setTimeout(() => {
            reset();
        }, 3000);
    }
}

//Game logic
// music.play()
let boxes = document.getElementsByClassName("box")

Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener("click", ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn
            turn = changeTurn()
            audioTurn.play()
            checkWin()

            if(!isgameover){

                document.getElementsByClassName("info")[0].innerText = "turn for " + turn
            }
        }
    })


});

//add on click listner to reset button

const reset = ()=>{
    let boxtext = document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    })

    turn = "X"

    isgameover = false

    document.getElementsByClassName("info")[0].innerText = "turn for " + turn

    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px"

    document.querySelector(".line").style.width = "0"
}

gameReset.addEventListener("click",reset)