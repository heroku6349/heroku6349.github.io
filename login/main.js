function handleSubmit() {
	let body = new URLSearchParams(new FormData(form));
	fetch(API + "/login", {
		method: "POST",
		credentials: "include",
		mode: 'cors',
		body: body,
	}).then((res) => {
		if (res.status == 200) {
			redirect("/pages/panel/");
		} else {
			res.json().then((res) => alert(res.reason));
		}
	}).catch((err) => {
        alert(err.message);
    });
}
