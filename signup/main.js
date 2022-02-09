const API = "https://kanoon-backend.herokuapp.com/";

let district = [
	"آذر",
	"آزادگان",
	"امام زاده ابراهیم",
	"انسجام",
	"چهارمردان",
	"باجک",
	"15 خرداد",
	"بلوار امین",
	"بنیاد",
	"پردیسان",
	"توحید",
	"جمهوری",
	"حرم",
	"دورشهر",
	"زنبیل آباد",
	"سالاریه",
	"سمیه",
	"شهرک قدس",
	"صفاشهر",
	"عطاران",
	"عمار یاسر",
	"کلهری",
	"کیوان فر",
	"گلزار",
	"مدرس",
	"هفت تیر",
	"هنرستان",
	"یزدان شهر",
	"سایر",
];

let groups = [
	"صهبا",
	"معراج",
	"مشکات",
	"فاتح",
	"امید",
	"ولایت",
	"مصباح",
	"تلاش",
	"سایر"
];

function loadDistrict() {
	district.forEach((element) => {
		document.getElementById("district").innerHTML += `<option value="${element}">${element}</option>`;
	});
}

function loadGroups() {
	groups.forEach((element) => {
		document.getElementById("group").innerHTML += `<option value="${element}">${element}</option>`;
	});
}

document.addEventListener("submit", (event) => {
	event.preventDefault();
});

function handleSubmit() {
	let body = new URLSearchParams(new FormData(document.forms.form));
	fetch(API + "/signup", {
		method: 'POST',
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

loadDistrict();
loadGroups();