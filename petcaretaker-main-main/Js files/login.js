const firebaseConfig = {
    apiKey: "AIzaSyBPlb5_HLZCXfgOL5L3weoOzlnFCrvzHDw",
    authDomain: "login-d5f79.firebaseapp.com",
    databaseURL: "https://login-d5f79-default-rtdb.firebaseio.com",
    projectId: "login-d5f79",
    storageBucket: "login-d5f79.appspot.com",
    messagingSenderId: "501325461421",
    appId: "1:501325461421:web:71702c4aafe6f1bfaed324",
    measurementId: "G-TXL9XB8CD7"
  };
firebase.initializeApp(firebaseConfig);
var loginDB=firebase.database().ref('login')
document.getElementById('login').addEventListener('submit',submitform)

function submitform(e){
    e.preventdefault();
    var name=getElementVal("email");
    var password=getElementVal("password");
    console.log(email,password);
}
const getElementVal=(id)=>{
    return document.getElementById(id).value;
};