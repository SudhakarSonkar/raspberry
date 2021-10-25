  const firebaseConfig = {
    apiKey: "AIzaSyAnWAoaqIg2JHMN1sIdADbe1jitOXrLfCc",
    authDomain: "meity-40d5f.firebaseapp.com",
    databaseURL: "https://meity-40d5f-default-rtdb.firebaseio.com",
    projectId: "meity-40d5f",
    storageBucket: "meity-40d5f.appspot.com",
    messagingSenderId: "952608043704",
    appId: "1:952608043704:web:89667bfec4ff9c05adba4d",
    measurementId: "G-XT9PRT6E5S"
  };

firebase.initializeApp(firebaseConfig);


let dbRef = firebase.database().ref('GF/R1/Light');
// let dbRef = firebase.database().ref('GF').child('R1').child('Light');



function on() {
  dbRef.set(1)
}


function off() {
  dbRef.set(0)
}


dbRef.on('value', function(snapshot) {
  let z = snapshot.val();
  if(z==1){
    document.querySelector("#result").innerHTML = "Your Light is ON";
  } else{
    document.querySelector("#result").innerHTML = "Your Light is OFF";
  }
})
















// function submitted(){
//  let p = document.querySelector("#value").value
//  document.querySelector("#result").innerHTML = 
//  console.log(p)
// }