window.onload = inicio;

function inicio() {
  document.querySelectorAll(".button")[0].onclick = addImage;
  document.querySelectorAll(".button")[1].onclick = hiddenImgage;
  document.querySelectorAll(".button")[2].onclick = restore;
};

function addImage () {
  document.querySelectorAll(".button")[0].style.visibility = "hidden";
  document.querySelector("#image").style.backgroundColor = "#4FBDBA";
  document.querySelector("#image").style.borderRadius = "50%";
  document.querySelector("#image img").style.transform = "rotate(25deg)";
};

function hiddenImgage () {
  if(document.querySelector("#image").style.display == "none") {
    document.querySelector("#image").style.display = "block";
    document.querySelectorAll(".button")[1].style.background = "#1A374D";
    
  } else {
    document.querySelector("#image").style.display = "none";
    document.querySelectorAll(".button")[1].style.background = "#4FBDBA";
  }
};

function restore () {
  document.querySelectorAll(".button")[1].style.backgroundColor = "#1A374D";
  document.querySelectorAll(".button")[0].style = null;
  // document.querySelector("#image").style = null;
  // document.querySelector("#image").style = null;
  document.querySelector("#image img").style = null;
  document.querySelector("#image").style = null;
};