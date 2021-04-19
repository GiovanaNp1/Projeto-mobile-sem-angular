let data;
let entry_id;

var parseQueryString = function() {

    var str = window.location.search;
    var objURL = {};

    str.replace(
        new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
        function( $0, $1, $2, $3 ){
            objURL[ $1 ] = $3;
        }
    );
    console.log(objURL.id)
    var Entry = firebase.database().ref('activity/').child(objURL.id);
    console.log(Entry)
    Entry.once('value', function (r) { // once = just this once, no need to actively watch the changes
        var entry = r.val();
        document.getElementById("materia").value = entry.materia
        document.getElementById("tipo").value = entry.tipo
        document.getElementById("date-activity").value = entry.data
        document.getElementById("descricao").value = entry.descricao
        console.log(entry)
        data = entry
        entry_id = objURL.id
        var element = document.getElementById("teste");
        element.classList.add("loadingFalse");
    });
};

parseQueryString()


function updateActivity() {
    var Entry = firebase.database().ref('activity/').child(entry_id);
    
     Entry.transaction(function(){
        entry = data || {};   
        entry.materia = document.getElementById("materia").value
        entry.data = document.getElementById("date-activity").value
        entry.descricao = document.getElementById("descricao").value
        entry.updatedAt = new Date().getTime();
        entry.tipo = document.getElementById("tipo").value;
        entry.author = localStorage.getItem('Email');
        
        return entry;
        
    }).then(function(){
        window.location.replace("./dashboard.html")
    }).catch(function(error){
        console.error(error);
    });
    
    return false;
}

function deleteActivity() {
    var Entry = firebase.database().ref('activity/').child(entry_id);
    Entry.remove(); // this will trigger Entry.on('value') immediatly
    window.location.replace("./dashboard.html")
    return false;
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
