//detect when button is clicked
//function



// keeps track of img index number

let imgIndex = 0
 document.getElementById("body").classList.add("backgroundIMG1")



function imgIdTracker() {
  
  if (imgIndex < 1) {
    imgIndex++
  }
  else {
    imgIndex = 0
  }

  
  changeBackground ()
}



// uses img index to change class

function changeBackground () {

  let IMG = document.getElementById('body')

  if (imgIndex < 1) {

    IMG.classList.remove("backgroundIMG2")

    IMG.classList.add('backgroundIMG1')

    document.getElementById("button").innerHTML = "JAcK SHREDZ ON GUITAR????"

  } 

  else {

    IMG.classList.remove("backgroundIMG1")

    IMG.classList.add("backgroundIMG2")

    document.getElementById("button").innerHTML = "JACK SHREDZ ON SKIS????"

  }

   console.log(imgIndex)

}

document.getElementById("button").onclick = imgIdTracker



// Drop down menu



const blogs = document.getElementById("blogs");
const blogDrop = document.getElementById("blogsDrop") 


function blogsDrop (event) {
    blogDrop.classList.remove("blogsUp")
    blogDrop.classList.add("blogsDrop")
}

function blogsUp (event) {
    blogDrop.classList.remove("blogsDrop")
    blogDrop.classList.add("blogsUp")
}

blogs.addEventListener("mouseover", blogsDrop)
blogDrop.addEventListener("mouseout", blogsUp)
