import * as proxyFE from "./proxyFE.js";

// constructResponse(response) will have specific values of music.data to be obtained through iterator = [{}].values()
// Then, if the data is not undefined or returned as empty, then pass artist to proxyFEConfig(artist) in proxyFE
export function constructResponse(response){
    let musicResponse = response.music.data.length;
    for(let i = 0; i < musicResponse; i++){
        let iterator = [{"id" : response.music.data[i].id, "artist": response.music.data[i].name}].values();
        for (let elements of iterator) {
            if(elements.artist !== undefined){
                let artist = elements.artist;
                proxyFE.proxyFEConfig(artist);
            };
        };
    };
};

