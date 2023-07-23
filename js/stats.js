let spans = document.querySelectorAll(".number");
setTimeout(() => {
    for (i = 0; i < spans.length; i++) {
        if (i != spans.length - 1) {
            startcount(spans[i]);
        }
        else {
            startcountcustom(spans[i]);
        }
    }
}, 500);
function startcount(el) {
    let intial = 0;
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        intial++;
        el.textContent = intial;
        if(el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000/goal);
}
function startcountcustom(el) {
    let intial = 0;
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        intial = intial + 10000;
        el.textContent = intial + "$";
        if(el.textContent == goal + "$") {
            clearInterval(count);
        }
    }, 20);
}