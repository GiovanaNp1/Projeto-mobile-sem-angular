function test(){
    console.log("olá mundo")
    window.location.replace("./login.html");
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var id_token = ''
    if(profile.getId() !== ''){
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        localStorage.setItem("Full Name",  profile.getName());
        localStorage.setItem("ID",  profile.getId());
        localStorage.setItem("Given Name",  profile.getGivenName());
        localStorage.setItem("Family Name",  profile.getFamilyName());
        localStorage.setItem("Image URL",  profile.getImageUrl());
        localStorage.setItem("Email",  profile.getEmail());
        // The ID token you need to pass to your backend:
        id_token= googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
        // window.location.replace("./dashboard.html");
    }
}

FB.login(function(response){
    console.log(response)
  });

function checkLoginState() {
    FB.getLoginStatus(function(response) {
    console.log(response)
      statusChangeCallback(response);
    });
  }


  FB.getLoginStatus(function(response) {
      console.log(response)
    statusChangeCallback(response);
});

