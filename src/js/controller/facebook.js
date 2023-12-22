import * as facebookView from "../view/facebook.js";
import * as facebookGeniusAPI from "../model/facebookGeniusAPI.js";

// When login, get API: users basic info and music from likes
// Basic info will pass to displayHeader(basicInfo) in facebookView. music will pass to constructResponse(response) in facebookGeniusAPI
export function login(){
    FB.login(function(){
        $("#loginBtn").html("Logout");
        FB.api("/me", function(basicInfo){
            facebookView.displayHeader(basicInfo);
        });
        FB.api(
            '/me',
            'GET',
            {"fields":"music"},
            function(response) {
                facebookGeniusAPI.constructResponse(response);
            }
        );
    }, {scope: 'user_likes'});
};

// When logout, noContent() will be activated in facebookView
export function logout(){
    facebookView.noContent();
};

