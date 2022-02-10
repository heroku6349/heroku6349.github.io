function w3_togle() {
    let state = document.getElementById("openNav").innerHTML;
    if (state == '<i class="fa fa-bars"></i>') {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").innerHTML = '<i class="fa fa-close"></i>';
    }
    else {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("openNav").innerHTML = '<i class="fa fa-bars"></i>';
    }
}

function createUserTable(user) {
    return  `<h2 class="w3-large">اطلاعات کاربری</h2>
                <table class="w3-table w3-striped w3-centered">
                <tr>
                </tr>
                <tr>
                    <td>نام</td>
                    <td>${user.data.name}</td>
                </tr>
                <tr>
                    <td>نام خانوادگی</td>
                    <td>${user.data.family}</td>
                </tr>
                <tr>
                    <td>نام پدر</td>
                    <td>${user.data.fatherName}</td>
                </tr>
                <tr>
                    <td>شماره شناسنامه</td>
                    <td>${user.data.SSN}</td>
                </tr>
                <tr>
                    <td>شماره منزل</td>
                    <td>${user.data.number.home}</td>
                </tr>
                <tr>
                    <td>شماره همراه</td>
                    <td>${user.data.number.phone}</td>
                </tr>
                <tr>
                    <td>شماره پدر</td>
                    <td>${user.data.number.father}</td>
                </tr>
                <tr>
                    <td>شماره مادر</td>
                    <td>${user.data.number.mother}</td>
                </tr>
                <tr>
                    <td>تاریخ تولد</td>
                    <td>${user.data.birthDay.year}/${user.data.birthDay.month}/${user.data.birthDay.day}</td>
                </tr>
                <tr>
                    <td>آدرس</td>
                    <td>${user.data.address.district}، خیابان ${user.data.address.street}، کوچه ${user.data.address.alley}، پلاک ${user.data.address.plaque}</td>
                </tr>
                <tr>
                    <td>گروه</td>
                    <td>${user.data.group}</td>
                </tr>
                <tr>
                    <td>عضویت بسیج</td>
                    <td>${user.data.basij ? "بله" : "خیر"}</td>
                </tr>
                <tr>
                    <td>نام کاربری</td>
                    <td>${user.username}</td>
                </tr>
                <tr>
                    <td>گذرواژه</td>
                    <td>${user.password}</td>
                </tr>
            </table>`;
}

function createSidebar(user) {
    let content = "";
    if (user.permissions.adminAccess) {
        content += `<a href="/pages/panel/admin" class="w3-bar-item w3-button">پنل مدیریت</a>`
    }
    if (user.permissions.postAccess) {
        content += `<a href="/pages/panel/post" class="w3-bar-item w3-button">مدیریت پست ها</a>`
    }
    if (user.permissions.HRAccess) {
        content += `<a href="/pages/panel/hr" class="w3-bar-item w3-button">مدیریت اعضا</a>`
    }
    return content;
}

function loadData() {
    fetch(API + "/profile", {
        credentials: "include",
        mode: 'cors',
    }).then((res) => {
        if (res.status == 200) {
            res.json().then((res) => {
                document.getElementById("main").innerHTML = createUserTable(res);
                document.getElementById("mySidebar").innerHTML += createSidebar(res);
            });
        } else {
            res.json().then((res) => {
                if (confirm(res.reason)) {
                    redirect("/login/");
                }
            });
        }
    }).catch((err) => {
        alert(err.message);
    });
}

function logout() {
    fetch(API + "/logout", {
        credentials: "include",
        mode: "cors",
    }).then((res) => {
        if (res.status == 200) {
            redirect("/");
        } else {
            res.json().then((res) => {
                alert(err.message);
            });
        }
    }).catch((err) => {
        alert(err.message);
    });
}

loadData();