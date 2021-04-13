
function goToActivity() {
    window.location.replace("./dashboard.html");
}

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
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase

  console.log(localStorage.getItem('email'))

  function createActivity() {
      /***************************************************\
       * Process form data and save to Firebase database *
      \***************************************************/
          
          var entry = {};
          entry.materia = document.getElementById("materia").value
          entry.data = document.getElementById("date-activity").value
          entry.descricao = document.getElementById("descricao").value
          entry.updatedAt = Date.now();
          entry.tipo = document.getElementById("tipo").value;
          entry.author = localStorage.getItem('email');

           var Entry = firebase.database().ref('activity/');
          
           Entry.push(entry).then(function(data){
               window.location.replace("./dashboard.html")
           }).catch(function(error){
               alert(error);
               console.error(error);
           })
          
          return false;
  }

