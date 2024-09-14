

// -------------- CHANGE BACKGROUND IMAGE ----------------

let imgIndex = 0

let IMG = document.getElementById('body')

document.getElementById("body").classList.add("backgroundIMG1")



function changeBackground() {
  
  if (imgIndex < 1) {

    imgIndex++

    IMG.classList.remove("backgroundIMG1")

    IMG.classList.add('backgroundIMG2')

    document.getElementById("button").innerHTML = "JAcK SHREDZ ON GUITAR????"
  }
  else {

    imgIndex = 0

    IMG.classList.remove("backgroundIMG2")

    IMG.classList.add("backgroundIMG1")

    document.getElementById("button").innerHTML = "JACK SHREDZ ON SKIS????"
  }

}

document.getElementById("button").onclick = changeBackground



// --------------- DROP DOWN MENUS --------------------


// BLOGS


const blogs = document.getElementById("blogs");

const blogDrop = document.getElementById("blogsDrop")

let blogsUpDown = 0


function blogsDrop() {
  
    if (blogsUpDown < 1) {
      blogDrop.classList.remove("blogsUp")
      blogDrop.classList.add("blogsDrop")
      blogsUpDown++
    }
    else {
    
      blogDrop.classList.remove("blogsDrop")
      blogDrop.classList.add("blogsUp")
      blogsUpDown = 0
    }
  
}

blogs.addEventListener("click", blogsDrop)



// PERSONAL


const personal = document.getElementById("personal");

const personalDrop = document.getElementById("personalDrop")

let personalUpDown = 0


function personalsDrop() {
  
    if (personalUpDown < 1) {
      
      personalDrop.classList.remove("personalUp")
      personalDrop.classList.add("personalDrop")
      personalUpDown++
    }
    else {
      
      personalDrop.classList.remove("personalDrop")
      personalDrop.classList.add("personalUp")
      personalUpDown = 0
    }
  
}

personal.addEventListener("click", personalsDrop)


// DA TASKS


const DA = document.getElementById("DA");

const DADrop = document.getElementById("DADrop")

let DAUpDown = 0


function DAsDrop() {
  
    if (DAUpDown < 1) {
      
      DADrop.classList.remove("DAUp")
      DADrop.classList.add("DADrop")
      DAUpDown++
    }
    else {
      
      DADrop.classList.remove("DADrop")
      DADrop.classList.add("DAUp")
      DAUpDown = 0
    }
  
}

DA.addEventListener("click", DAsDrop)


