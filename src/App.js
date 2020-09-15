import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase';

export class App extends Component {
  handleClick=()=>{
    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    var number = '+xxxxxxxxxxxx';
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function(e){
      var code = prompt('Enter the OTP', '');
      if(code === null) return;
      e.confirm(code).then(function(result){
        console.log(result.user);
        document.querySelector('label').textContent += result.user.phoneNumber + "Number Verified";
      }).catch(function (error) {
        console.error(error);
      });
    }).catch(function (error) {
      console.error(error);
    });
  }
  render() {
    return (
      <div>
        <label></label>
        <div id="recaptcha"></div>
        <button onClick={this.handleClick}>Click Here</button>
      </div>
    );
  }
}

export default App;
