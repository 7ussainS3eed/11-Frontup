let videos = document.querySelectorAll(".video");
let imgPrev = document.querySelector(".img-prev");
for (i = 0; i < videos.length; i++) {
    videos[i].onclick = function() {
        for (j = 0; j < videos.length; j++) {
            videos[j].classList.remove("active3");
        }
        this.classList.add("active3");
        imgPrev.src = "images/prev" + this.classList[1] + ".PNG";
    }
}
let clickable = document.querySelector(".clickable");
clickable.onclick = function() {
    for (i = 0; i < videos.length; i++) {
        if (videos[i].classList.contains("active3")) {
            switch (i) {
                case 0: window.open("https://www.youtube.com/watch?v=g8-Xrpl_Uhk", '_blank').focus();
                case 1: window.open("https://www.youtube.com/watch?v=i9uAgkKEuNU", '_blank').focus();
                case 2: window.open("https://www.youtube.com/watch?v=Y8PXMbr0Kqo", '_blank').focus();
                case 3: window.open("https://www.youtube.com/watch?v=N0DhCV_-Qbg", '_blank').focus();
                case 4: window.open("https://www.youtube.com/watch?v=Lz1R4QDbMJc", '_blank').focus();
            }
            break;
        }
    }
}