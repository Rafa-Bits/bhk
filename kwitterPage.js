const firebaseConfig = {
      apiKey: "AIzaSyCm_EYOgxgyNnqqUsJwY6bdMFwpAUlmvFU",
      authDomain: "myproject-57a0d.firebaseapp.com",
      databaseURL: "https://myproject-57a0d-default-rtdb.firebaseio.com",
      projectId: "myproject-57a0d",
      storageBucket: "myproject-57a0d.appspot.com",
      messagingSenderId: "203920087860",
      appId: "1:203920087860:web:eb8fba62105bbdcdd9a361"
      };
      firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
         function send() { msg = document.getElementById("msg").value; firebase.database().ref(roomName).push({ name:userName, message:msg, like:0 });
      } });  }); }{
      document.getElementById("msg").value = ""; }