import $ from 'jquery';
import * as facebookController from "../controller/facebook.js"

const APP_ID = "";

// Init FB API then getLoginStatus
export function initFB() {
    $.ajaxSetup({ cache: true });
    $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
      FB.init({
        appId: APP_ID,
        version: 'v10.0',
      });     
      FB.getLoginStatus(updateStatusCallback);
    });
};

// If/else conditions and subsequent effects depending on response.status of getLoginStatus
function updateStatusCallback() {
    FB.getLoginStatus(function(response){
        if (response.status === 'connected') {
            FB.logout(function(){
                $("#loginBtn").html("Login");
                facebookController.logout();
            });
        } else if (response.status === 'not_authorized') {
            facebookController.login();
        } else {
            facebookController.login();
        };
    });
};

