window.onload = function () {
  gapi.load("auth2", function () {
    gapi.auth2
      .init({
        client_id:
          "1010511045347-vrmesfglsqrnflnlsooa1r7t2rdsa7ue.apps.googleusercontent.com",
      })
      .then(function () {
        gapi.signin2.render("g-signin2", {
          scope: "profile email",
          width: 240,
          height: 50,
          longtitle: true,
          theme: "dark",
          onsuccess: onSignIn,
          onfailure: onFailure,
        });
      });
  });
};

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId());
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  // Save to localStorage for testing
  localStorage.setItem("userID", profile.getId());
  localStorage.setItem("userName", profile.getName());
  localStorage.setItem("userEmail", profile.getEmail());
}

function onFailure(error) {
  console.error("Google Sign-In Error:", error);
}

function signOut() {
  var authInstance = gapi.auth2.getAuthInstance();
  authInstance
    .signOut()
    .then(function () {
      console.log("User signed out.");
      alert("Signed out successfully");

      // Clear localStorage
      localStorage.removeItem("userID");
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
    })
    .catch(function (error) {
      console.error("Sign-Out Error:", error);
    });
}
