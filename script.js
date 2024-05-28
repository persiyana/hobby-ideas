

function hideOrShow() {
    var x = document.getElementById("catList");
    var y = document.getElementById("catNav");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.textAlign = "left";
        y.style.borderRadius = "1.1em 1.1em 0em 0em";
    } else {
        y.style.borderRadius = "1.5em";
        x.style.display = "none";
    }
}

window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if (this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
};