
console.log(localStorage.getItem('Email'))

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

  var Blog = firebase.database().ref('Entry').orderByChild('updatedAt');

        Blog.on('value', function (r) {

            $('#entries').html('Loading...');
            var html = '';
            r.forEach(function (item) {
                entry = item.val()
                html = '<div class="col-md-4">' +
                    '<a href="entry.html?id=' + item.getKey() + '" style="text-decoration:none!important;">' +
                    '<div class="panel panel-info">' +
                    '<div class="panel-heading">' +
                    '<h3 class="panel-title">' + excerpt(entry.title, 140) + '</h3>' +
                    '</div>' +
                    '<div class="panel-body">' +
                    '<small>By ' + entry.author + ' | ' + datetimeFormat(entry.updatedAt) + ' | ' + entry.views + ' views</small>' +
                    '<hr><p>' + excerpt(entry.content, 250) + '</p>' +
                    '</div>' +
                    '</div>' +
                    '</a>' +
                    '</div>' + html; // prepend the entry because we need to display it in reverse order
            });

            $('#entries').html(html);
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

        function addNewActivity(){
            window.location.replace("./addActivity.html");
        }