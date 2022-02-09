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

function loadData() {
    fetch(API + "/profile", {
        credentials: "include",
        mode: 'cors',
    }).then((res) => {
        if (res.status == 200) {
            res.json().then((res) => console.log(res));
            //load data
        } else {
            res.json().then((res) => alert(res.reason));
            alert(document.cookie)
            //redirect("/login/");
        }
    }).catch((err) => {
        alert(err.message);
    });
}

function redirect(pathName) {
    window.location.assign(window.location.origin + pathName);
}

loadData();