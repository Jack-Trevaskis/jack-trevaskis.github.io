

// -------------- CHANGE BACKGROUND IMAGE ----------------

let imgIndex = 0


let IMG = document.getElementById('body')

let skiIMG = document.getElementById('skiChange')

let guitarIMG = document.getElementById('guitarChange')


document.getElementById("body").classList.add("backgroundIMG1")


const change = document.getElementById("clickBox");


function changeBackground() {
  
    //changes to guitar

  if (imgIndex < 1) {

    imgIndex++

    IMG.classList.remove("backgroundIMG1")
    IMG.classList.add('backgroundIMG2')

    skiIMG.classList.remove('IMGOff')
    skiIMG.classList.add("skiChange")
    

    guitarIMG.classList.remove('guitarChange')
    guitarIMG.classList.add('IMGOff')
  }

    //changes to ski

  else {

    imgIndex = 0

    IMG.classList.remove("backgroundIMG2")
    IMG.classList.add("backgroundIMG1")

    skiIMG.classList.remove("skiChange")
    skiIMG.classList.add('IMGOff')

    guitarIMG.classList.remove('IMGOff')  
    guitarIMG.classList.add('guitarChange')

  }

}

change.addEventListener("click", changeBackground)

//   IMG HOVER

const clickBox = document.getElementById("clickBox")

function IMGHover () {

 if(imgIndex < 1) {

  guitarIMG.classList.remove("guitarChange")
  guitarIMG.classList.add("guitarChangeHover")

 }

 else {

  skiIMG.classList.remove("skiChange")
  skiIMG.classList.add("skiChangeHover")

 }

}

clickBox.addEventListener("mouseover", IMGHover)

function IMGHoverOff () {

 if (imgIndex < 1) {

   guitarIMG.classList.remove("guitarChangeHover")
   guitarIMG.classList.add("guitarChange")
  }

  else {

   skiIMG.classList.remove("skiChangeHover")
   skiIMG.classList.add("skiChange")

 }

}

clickBox.addEventListener("mouseout", IMGHoverOff)



// --------------- DROP DOWN MENUS --------------------


// BLOGS


const blogs = document.getElementById("blogs");

const blogDrop = document.getElementById("blogsDrop");

let blogsUpDown = 0


function blogsDrop() {

  
  
    if (blogsUpDown < 1) {

      blogDrop.classList.remove("dropUp")
      blogDrop.classList.add("dropDown")

      personalDrop.classList.remove("dropDown")
      personalDrop.classList.add("dropUp")

      DADrop.classList.remove("dropDown")
      DADrop.classList.add("dropUp")

      blogsUpDown++
      personalUpdown = 0
      DAUpDown = 0

    }
    else {
    
      blogDrop.classList.remove("dropDown")
      blogDrop.classList.add("dropUp")
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
      
      personalDrop.classList.remove("dropUp")
      personalDrop.classList.add("dropDown")

      DADrop.classList.remove("dropDown")
      DADrop.classList.add("dropUp")

      blogDrop.classList.remove("dropDown")
      blogDrop.classList.add("dropUp")

      personalUpDown++
      blogsUpDown = 0
      DAUpDown = 0
    }
    else {
      
      personalDrop.classList.remove("dropDown")
      personalDrop.classList.add("dropUp")
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
      
      DADrop.classList.remove("dropUp")
      DADrop.classList.add("dropDown")

      blogDrop.classList.remove("dropDown")
      blogDrop.classList.add("dropUp")

      personalDrop.classList.remove("dropDown")
      personalDrop.classList.add("dropUp")

      DAUpDown++
      personalUpDown = 0
      blogsUpDown = 0
    }
    else {
      
      DADrop.classList.remove("dropDown")
      DADrop.classList.add("dropUp")
      DAUpDown = 0
    }
  
}

DA.addEventListener("click", DAsDrop)



// ------ Hover ICON for DROP bar ----------



//  create hover class
//  detect mouse hover
//  change class of element
//  detect mouse off
//  change class back to orignal


// blogs hover


const hoverBlog = document.getElementById("blogs")

function blogsHover () {
  
  hoverBlog.classList.remove("blogs")
  hoverBlog.classList.add("blogsHover")
 
}

hoverBlog.addEventListener("mouseover", blogsHover )

function blogsOff () {

  hoverBlog.classList.remove("blogsHover")
  hoverBlog.classList.add("blogs")
}

hoverBlog.addEventListener("mouseout", blogsOff )


// personal hover


const hoverPersonal = document.getElementById("personal")

function personalHover () {

  hoverPersonal.classList.remove("personal")
  hoverPersonal.classList.add("personalHover")

}

hoverPersonal.addEventListener("mouseover", personalHover )


function personalOff () {

  hoverPersonal.classList.remove("personalHover")
  hoverPersonal.classList.add("personal")  

}

hoverPersonal.addEventListener("mouseout", personalOff )


// DA Hover


const hoverDA = document.getElementById("DA")

function DAHover () {
  
  hoverDA.classList.remove("DA")
  hoverDA.classList.add("DAHover")
 
}

hoverDA.addEventListener("mouseover", DAHover )

function DAOff () {

  hoverDA.classList.remove("DAHover")
  hoverDA.classList.add("DA")
}

hoverDA.addEventListener("mouseout", DAOff )




