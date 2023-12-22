import $ from "jquery";
import songBox from "../../templates/song.handlebars";

// Pass artistData = {artist: artistArr} into songBox, which is overall structure of song being displayed
export function displayArtist(artistArr){
        $('#song-list').attr("src", " ");
        let artistData = {artist: artistArr};
        $("#song-list").html(songBox(artistData));
};
