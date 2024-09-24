// declaring main constants

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");





// ------------ WIN DETECTION ---------------

// detect which boxes have been selected by player

let playedBox = []

// store variables of winning combinations

function winDetect () {

let playedBox1 = playedBox.find(detect1)
let playedBox2 = playedBox.find(detect2)
let playedBox3 = playedBox.find(detect3)
let playedBox4 = playedBox.find(detect4)
let playedBox5 = playedBox.find(detect5)
let playedBox6 = playedBox.find(detect6)
let playedBox7 = playedBox.find(detect7)
let playedBox8 = playedBox.find(detect8)
let playedBox9 = playedBox.find(detect9)

function detect1 (item) {
    return item === "1";
}

function detect2 (item) {
    return item === "2";
}

function detect3 (item) {
    return item === "3";
}

function detect4 (item) {
    return item === "4";
}

function detect5 (item) {
    return item === "5";
}

function detect6 (item) {
    return item === "6";
}

function detect7 (item) {
    return item === "7";
}

function detect8 (item) {
    return item === "8";
}

function detect9 (item) {
    return item === "9";
}

//horizontal win states

if (playedBox1 == "1" && playedBox2 == "2" && playedBox3 == "3") {

    alert("You Win!!!")
    resetGame()
}

if (playedBox4 == "4" && playedBox5 == "5" && playedBox6 == "6") {

    alert("You Win!!!")
    resetGame()
}

if (playedBox7 == "7" && playedBox8 == "8" && playedBox9 == "9") {

    alert("You Win!!!")
    resetGame()
}

//vertical win states

if (playedBox1 == "1" && playedBox4 == "4" && playedBox7 == "7") {

    alert("You Win!!!")
    resetGame()
}

if (playedBox2 == "2" && playedBox5 == "5" && playedBox8 == "8") {

    alert("You Win!!!")
    resetGame()
}

if (playedBox3 == "3" && playedBox6 == "6" && playedBox9 == "9") {

    alert("You Win!!!")
    resetGame()
}

//diagonal win states

if (playedBox1 == "1" && playedBox5 == "5" && playedBox9 == "9") {

    alert("You Win!!!")
    resetGame()
}

if (playedBox3 == "3" && playedBox5 == "5" && playedBox7 == "7") {

    alert("You Win!!!")
    resetGame()
}

}
   

    

// if player has selected all boxes of a winning variable play alert win

// if player has not matched then keep playing




// --------- PLAYER 2 LOGIC --------------

// keep track of what boxes have been clikced - logic inside of click functions

let boxStatus = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

// detect when player 2s turn

    // could just call the player 2 function in the click functions

// randomly select a box from 1 - length of box status array

// change class of box to player 2 using randomly selected index number

// remove box from boxStatus array

function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function player2 () {

    let boxRand = getRandomInt(0, boxStatus.length - 1)
    console.log(boxRand)


    if (boxStatus[boxRand] == "1") {

        box1.classList.remove("box1")
        box1.classList.add("box1Comp")

        let index = boxStatus.indexOf("1")
        boxStatus.splice(index, 1)
        return
    }

    if (boxStatus[boxRand] == "2") {

        box2.classList.remove("box2")
        box2.classList.add("box2Comp")

        let index = boxStatus.indexOf("2")
        boxStatus.splice(index, 1)
        return
    }

    if (boxStatus[boxRand] == "3") {

        box3.classList.remove("box3")
        box3.classList.add("box3Comp")

        let index = boxStatus.indexOf("3")
        boxStatus.splice(index, 1)
        return
    }

    if (boxStatus[boxRand] == "4") {

        box4.classList.remove("box4")
        box4.classList.add("box4Comp")

        let index = boxStatus.indexOf("4")
        boxStatus.splice(index, 1)
        return
    }

    if (boxStatus[boxRand] == "5") {

        box5.classList.remove("box5")
        box5.classList.add("box5Comp")

        let index = boxStatus.indexOf("5")
        boxStatus.splice(index, 1)
        return
    }

    if (boxStatus[boxRand] == "6") {

        box6.classList.remove("box6")
        box6.classList.add("box6Comp")

        let index = boxStatus.indexOf("6")
        boxStatus.splice(index, 1)
        return
    }

    if (boxStatus[boxRand] == "7") {

        box7.classList.remove("box7")
        box7.classList.add("box7Comp")

        let index = boxStatus.indexOf("7")
        boxStatus.splice(index, 1)
        return
    }

    if (boxStatus[boxRand] == "8") {

        box8.classList.remove("box8")
        box8.classList.add("box8Comp")

        let index = boxStatus.indexOf("8")
        boxStatus.splice(index, 1)
        return
    }

    if (boxStatus[boxRand] == "9") {

        box9.classList.remove("box9")
        box9.classList.add("box9Comp")

        let index = boxStatus.indexOf("9")
        boxStatus.splice(index, 1)
        return
    }

    else{}

}












// ----------- detect when player has clicked each box, one for each box ------------------



function click1() {
    box1.classList.remove("box1")
    box1.classList.add("box1Click")

    let index = boxStatus.indexOf("1")
    boxStatus.splice(index, 1)

    playedBox.push("1")

    player2()

    winDetect()

    

    
}
box1.addEventListener("click", click1)





function click2() {
    box2.classList.remove("box2")
    box2.classList.add("box2Click")

    let index = boxStatus.indexOf("2")
    boxStatus.splice(index, 1)
    
    playedBox.push("2")

    player2()

    winDetect()
}
box2.addEventListener("click", click2)





function click3() {
    box3.classList.remove("box3")
    box3.classList.add("box3Click")

    let index = boxStatus.indexOf("3")
    boxStatus.splice(index, 1)
    
    playedBox.push("3")

    player2()

    winDetect()
}
box3.addEventListener("click", click3)




function click4() {
    box4.classList.remove("box4")
    box4.classList.add("box4Click")

    let index = boxStatus.indexOf("4")
    boxStatus.splice(index, 1)
    
    playedBox.push("4")

    player2()

    winDetect()
}
box4.addEventListener("click", click4)





function click5() {
    box5.classList.remove("box5")
    box5.classList.add("box5Click")

    let index = boxStatus.indexOf("5")
    boxStatus.splice(index, 1)
    
    playedBox.push("5")

    player2()

    winDetect()
}
box5.addEventListener("click", click5)





function click6() {
    box6.classList.remove("box6")
    box6.classList.add("box6Click")

    let index = boxStatus.indexOf("6")
    boxStatus.splice(index, 1)
    
    playedBox.push("6")

    player2()

    winDetect()
}
box6.addEventListener("click", click6)





function click7() {
    box7.classList.remove("box7")
    box7.classList.add("box7Click")

    let index = boxStatus.indexOf("7")
    boxStatus.splice(index, 1)
    
    playedBox.push("7")

    player2()

    winDetect()
}
box7.addEventListener("click", click7)





function click8() {
    box8.classList.remove("box8")
    box8.classList.add("box8Click")

    let index = boxStatus.indexOf("8")
    boxStatus.splice(index, 1)
    
    playedBox.push("8")

    player2()

    winDetect()
}
box8.addEventListener("click", click8)



function click9() {
    box9.classList.remove("box9")
    box9.classList.add("box9Click")

    let index = boxStatus.indexOf("9")
    boxStatus.splice(index, 1)

    playedBox.push("9")

    player2()

    winDetect()
}
box9.addEventListener("click", click9)










// ------- RESET GAME ---------

const reset = document.getElementById("reset");

function resetGame() {

    box1.classList.remove("box1Click")
    box1.classList.remove("box1Comp")
    box1.classList.add("box1")

    box2.classList.remove("box2Click")
    box2.classList.remove("box2Comp")
    box2.classList.add("box2")

    box3.classList.remove("box3Click")
    box3.classList.remove("box3Comp")
    box3.classList.add("box3")

    box4.classList.remove("box4Click")
    box4.classList.remove("box4Comp")
    box4.classList.add("box4")

    box5.classList.remove("box5Click")
    box5.classList.remove("box5Comp")
    box5.classList.add("box5")

    box6.classList.remove("box6Click")
    box6.classList.remove("box6Comp")
    box6.classList.add("box6")

    box7.classList.remove("box7Click")
    box7.classList.remove("box7Comp")
    box7.classList.add("box7")

    box8.classList.remove("box8Click")
    box8.classList.remove("box8Comp")
    box8.classList.add("box8")

    box9.classList.remove("box9Click")
    box9.classList.remove("box9Comp")
    box9.classList.add("box9")

    boxStatus = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

    playedBox = []


}

reset.addEventListener("click", resetGame)















