// console.log(firebase)

let register =()=>{
    let email =document.getElementById('email');
    let password = document.getElementById('pass');
    let fname = document.getElementById('name');
    let phoneNum = document.getElementById('phoneNum');

    let data = {
      Name : fname.value,
      number : phoneNum.value,
      email : email.value,
      password : password.value
    }





    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      
      var user = userCredential.user;
      firebase.database().ref(`users/${user.uid}`).set(data)
      // console.log('user=>' ,user)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
     console.log('error=>',errorMessage)
    });
}


let login =()=>{
  let email =document.getElementById('email');
  let password = document.getElementById('password');
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    
    var user = userCredential.user;
    firebase.database().ref(`users/${userid.uid}`)
    once(value,(data)=>{
      console.log(data.value)
    })
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error.message)
  });

}


var btn = document.getElementById('btn');
var firstBar =document.getElementById('first-bar');
var secondBar =document.getElementById('sec-bar');



function switchBtn(){
   btn.classList.toggle("btn-active")
  //  window.location.href = "login.html"
  
   

}    

switchBtn()