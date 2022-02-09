document.addEventListener("submit", (event) => {
	event.preventDefault();
});

function handleSubmit() {
	let body = new URLSearchParams(new FormData(document.forms.form));
	fetch(API + "/login", {
		method: "POST",
		credentials: "include",
		mode: 'cors',
		body: body,
	}).then((res) => {
		if (res.status == 200) {
			redirect("/pages/profile/");
		} else {
			res.json().then((res) => alert(res.reason));
		}
	}).catch((err) => {
        alert(err.message);
    });
}

function redirect(pathName) {
	window.location.assign(window.location.origin + pathName);
}