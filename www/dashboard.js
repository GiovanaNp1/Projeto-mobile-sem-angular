console.log(localStorage.getItem('Email'))

// localStorage.setItem("Full Name",localStorage.getItem("Full Name"));
// localStorage.setItem("ID",localStorage.getItem("ID"));
// localStorage.setItem("Given Name",localStorage.getItem("Given Name"));
// localStorage.setItem("Family Name",localStorage.getItem("Family Name"));
// localStorage.setItem("Image URL",localStorage.getItem("Image URL"));
// localStorage.setItem("Email",localStorage.getItem("Email"));

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBa30ko-Xnjj2T_MoTRwxRoTrJnb_5xESM",
    authDomain: "projeto-1-c5ba5.firebaseapp.com",
    databaseURL: "https://projeto-1-c5ba5-default-rtdb.firebaseio.com",
    projectId: "projeto-1-c5ba5",
    storageBucket: "projeto-1-c5ba5.appspot.com",
    messagingSenderId: "325541971390",
    appId: "1:325541971390:web:b5cf707b6ddef039e1a5ef"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getImage(params) {
    switch (params) {
        case '1': return './assets/imgs/book 1.svg'
        default: return './assets/imgs/globe 1.svg'
    }
}

function getMateria(params) {
    switch (params) {
        case '1': return 'Matematica'
        default: return 'Outro'
    }
}

function editThisActivity(params) {
    console.log(params)
}

var Blog = firebase.database().ref('activity').orderByChild('updatedAt');

Blog.on('value', function (r) {

    $('#entries').html('Loading...');
    var html = '';
    r.forEach(function (item) {
        entry = item.val()
        html = '<a href="editActivity.html?id=' + item.getKey() + '" style="text-decoration:none!important; color:black">' +
            '<div class="card card-verde">' +
            '<img class="card-img-top" src="' + getImage(entry.materia) + '" alt="Card image cap">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + getMateria(entry.materia) + ' | ' + excerpt(entry.data) + '</h5>' +
            '<p class="card-text">' + excerpt(entry.descricao, 140) + '</p>' +
            '</div>' +
            '</div>' +
            '</a>' +  html; // prepend the entry because we need to display it in reverse order
    });


    $('#entries').html(html);
    var element = document.getElementById("teste");
    element.classList.add("loadingFalse");
});

/*************\
 * Utilities *
\*************/

function strip(html) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}

function excerpt(text, length) {
    text = strip(text);
    text = $.trim(text); //trim whitespace
    if (text.length > length) {
        text = text.substring(0, length - 3) + '...';
    }
    return text;
}

function pad2Digit(num) {
    return ('0' + num.toString()).slice(-2);
}

function datetimeFormat(timestamp) {
    var dateObj = new Date(timestamp);
    var en_month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return dateObj.getDate() + ' ' + en_month[dateObj.getMonth()] + ' ' + pad2Digit(dateObj.getFullYear()) + ' ' + pad2Digit(dateObj.getHours()) + ':' + pad2Digit(dateObj.getMinutes());
}

function addNewActivity() {
    window.location.replace("./addActivity.html");
}