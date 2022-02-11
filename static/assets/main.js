//global variables
const API = (window.location.hostname == "127.0.0.1") ? "http://127.0.0.1:8080" : "https://kanoon-backend.herokuapp.com";

//global functions
function redirect(pathName) {
    window.location.assign(window.location.origin + pathName);
}

document.addEventListener("submit", (event) => {
	event.preventDefault();
});