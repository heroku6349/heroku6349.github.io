let slideIndex = 0;
let timeout;

function w3_togle() {
    let state = document.getElementById("openNav").innerHTML;
    if (state == '<i class="fa fa-bars"></i>') {
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").innerHTML = '<i class="fa fa-close"></i>';
    }
    else {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("openNav").innerHTML = '<i class="fa fa-bars"></i>';
    }
}

function loadImages() {
    fetch(API + "/events/main").then((res) => res.json())
        .then((data) => {
            if (data.data === null || data.data?.length === 0) {
                throw new Error("Missing Data");
            }
            data.data.forEach((element) => {
                document.getElementById("slideShow").innerHTML += `<div class="w3-display-container mySlides">
                <a href="${"#"}"><img src="${API + element.image[element.image.length - 1]}" style="width:100%"></a>
                <div class="w3-display-topleft w3-large w3-container w3-padding-16 w3-white w3-opacity-min">${element.title[element.title.length - 1]}</div>
                </div>`;
            });
            document.getElementById("slideShow").innerHTML += `<div id="slideNav" 
            class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%">
            <div class="w3-left w3-hover-text-khaki" onclick="plusDivs(1)">&#10095;</div>
            <div class="w3-right w3-hover-text-khaki" onclick="plusDivs(-1)">&#10094;</div>
            </div>`;
            
            data.data.forEach((element, index) => {
                document.getElementById("slideNav").innerHTML += ` <span class="myDots w3-badge w3-border w3-transparent w3-hover-white"
                onclick="currentDiv(${index})"></span> `;
            });
            showDivs();
        }).catch((err) => {
            console.error(err);
            document.getElementById("slideShow").innerHTML +=  `<div class="w3-display-container mySlides">
            <a href="#"><img src="static/images/kanoon-logo.jpg" style="width:100%"></a>
            <div class="w3-display-topleft w3-large w3-container w3-padding-16 w3-white w3-opacity-min">کانون مسجد چهارده معصوم</div>
            </div>`;
            document.getElementsByClassName("mySlides")[0].style.display = "block";
        });
}

function currentDiv(n) {
    slideIndex = n;
    showDivs();
}

function plusDivs(n = 1) {
    slideIndex += n;
    showDivs();
}

function showDivs() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("myDots");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    if (slides.length) {
        slides[((slideIndex % slides.length) + slides.length) % slides.length].style.display = "block";
        dots[((slideIndex % slides.length) + slides.length) % slides.length].className += " w3-white";
    }
    clearTimeout(timeout);
    timeout = setTimeout(plusDivs, 3000);
}

loadImages();