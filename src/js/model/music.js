import * as musicView from "../view/music.js";

let artistReq;
let artistArr = [];

// Model of artist {}, then have artistArr.push(artistObj), then displayArtist(artistArr) in musicView
export function fetchArtist(rawARTIST){
    artistReq = rawARTIST.response.hits.length;
    for(let i = 0; i < artistReq; i++){        
        let artistObj = {
            "id" : rawARTIST.response.hits[i].result.id,
            "annotation_count": rawARTIST.response.hits[i].result.annotation_count,
            "artist_names": rawARTIST.response.hits[i].result.artist_names,
            "featured_artists": rawARTIST.response.hits[i].result.featured_artists.map(name => name.name).values().next().value,
            "feature_artists_verified": rawARTIST.response.hits[i].result.featured_artists.map(verfied => verfied.is_verified).values().next().value,
            "full_title" : rawARTIST.response.hits[i].result.full_title,
            "header_image_thumbnail_url" : rawARTIST.response.hits[i].result.header_image_thumbnail_url,
            "primary_artist" : rawARTIST.response.hits[i].result.primary_artist.name,
            "primary_artist_verified" : rawARTIST.response.hits[i].result.primary_artist.is_verified,
            "release_date_for_display" : rawARTIST.response.hits[i].result.release_date_for_display,
            "title" : rawARTIST.response.hits[i].result.title,
            "url" : rawARTIST.response.hits[i].result.url
        };
        artistArr.push(artistObj);
        musicView.displayArtist(artistArr);
    };
};


