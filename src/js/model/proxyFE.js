import * as musicModel from "./music.js";
import $ from 'jquery';

// The XMLHttpRequest returns Promise of geniusURL in an array of responseURL returned from xhttp which came from
// from xhttp.open("GET", "https://api.genius.com/search?q=" + artist + "&access_token=" + geniusToken);
// Then fetch URL, then have response.json(),
// Then pass rawARTIST into {} which has fetchArtist() in musicModel

let geniusToken = ""

export function proxyFEConfig(artist){
  let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://api.genius.com/search?q=" + artist + "&access_token=" + geniusToken);
    xhttp.onload = function () {
      let geniusURL = [xhttp.responseURL]
      Promise.all(
        geniusURL.map(
          URL => fetch(URL)
            .then(
              response => response.json()
            )
            .then(
              rawARTIST => {musicModel.fetchArtist(rawARTIST);}
            )
        )
      );
    };
  xhttp.send();
};

