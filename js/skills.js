let spans = document.querySelectorAll(".skill h3 span");
let spans2 = document.querySelectorAll(".the-progress span");
setTimeout(() => {
    for (i = 0; i < spans.length; i++) {
        startcount(spans[i]);
    }
    spans2.forEach((span2) => {
        span2.style.width = span2.dataset.width;
    });
}, 500);
function startcount(el) {
    let intial = 0;
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        intial++;
        el.textContent = intial + "%";
        if(el.textContent == goal + "%") {
            clearInterval(count);
        }
    }, 1000/goal);
}