let other = document.querySelector(".other");
let layer = document.querySelector(".layer");
other.onmouseover = function() {
    other.style.cssText = "color: var(--main-color); background-color: #fafafa; border-top: 4px solid var(--main-color)";
    layer.style.display = "block";
}
other.onmouseout = function() {
    if (other.classList.contains("active") == 0) {
        other.style.cssText = "color: black; background-color: white; border-top: none";
    }
    layer.style.display = "none";
}
let mega = document.querySelector(".mega-menu");
mega.onmouseover = function() {
    other.style.cssText = "color: var(--main-color); background-color: #fafafa; border-top: 4px solid var(--main-color)";
    layer.style.display = "block";
}
mega.onmouseout = function() {
    if (other.classList.contains("active") == 0) {
        other.style.cssText = "color: black; background-color: white; border-top: none";
    }
    layer.style.display = "none";
}