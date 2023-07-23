let images = document.querySelectorAll(".ads img");
images[Math.floor(Math.random() * 10)].style.display = "block";

document.querySelector(".change").onclick = function() {
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[Math.floor(Math.random() * 10)].style.display = "block";
}

document.querySelector(".close").onclick = function() {
    document.querySelector(".control").style.display = "none";
    document.querySelector(".ads").style.display = "none";
}