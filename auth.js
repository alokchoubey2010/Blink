const firebaseConfig = {
  apiKey: "AIzaSyC6ULXUTsCznJgZmOQDTv43Fb9fOUwLNE8",
  authDomain: "blink-c9c7e.firebaseapp.com",
  databaseURL: "https://blink-c9c7e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blink-c9c7e",
  storageBucket: "blink-c9c7e.appspot.com",
  messagingSenderId: "775297212661",
  appId: "1:775297212661:web:f7c05b401d979c163025bc",
  measurementId: "G-TLRMJHVHNZ"
};

firebase.initializeApp(firebaseConfig);

google = document.getElementById("google");
google.onclick = function(){
  google.innerHTML = '';
  google.innerHTML += '<div class="loader"></div>';
  auth = firebase.auth();
   const provider = new firebase.auth.GoogleAuthProvider();

 firebase.auth().signInWithPopup(provider)
   .then((user) => {
      updateToDatabase(user);
   })
   .catch((error) => {
     alert("Google sign-in failed: " + error.message);
   });
}

function updateToDatabase(user) {
  updates = {
    name: user.displayName,
    email: user.email,
    profileImg: user.photoURL,
    lastLogin: new Date(),
    lastLogout: "null",
    blinks: '0',
    bio: 'null',
    followers: '0',
    following: '0',
    streak: '0'
  }
  database = firebase.database();
  database.ref('users/' + user.displayName).update(updates)
}