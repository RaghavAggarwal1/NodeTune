import $ from "jquery";

// displayHeader will display basicInfo.name
export function displayHeader(basicInfo){
    $("#welcomeHeader").html(
        "Welcome back " + basicInfo.name);
};

// noContent will reset .html("") for .song-list
export function noContent(){
    $("#welcomeHeader").html("Welcome to Mashup!");
    $("#song-list").html("");
};