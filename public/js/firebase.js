'use strict';

//grab a form
const form = document.querySelector('.form-inline');

//grab an input
const inputEmail = form.querySelector('#email');


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWhEB2s-9mhv_FO3l26_PCruhSQqgtqBI",
    authDomain: "anima-197c2.firebaseapp.com",
    databaseURL: "https://anima-197c2-default-rtdb.firebaseio.com",
    projectId: "anima-197c2",
    storageBucket: "anima-197c2.appspot.com",
    messagingSenderId: "671493226649",
    appId: "1:671493226649:web:c7da953b0db77b5c9fb808",
    measurementId: "G-0KTEP0H15Q"
};


//create a functions to push
function firebasePush(input) {


    //prevents from braking
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    //push itself
    var mailsRef = firebase.database().ref('emails').push().set({
        mail: input.value
    });

}

//push on form submit
if (form) {
    form.addEventListener('submit', function(evt) {
        evt.preventDefault();
        firebasePush(inputEmail);

        //shows alert if everything went well.
        return alert('Data Successfully Sent to Realtime Database');
    })
}