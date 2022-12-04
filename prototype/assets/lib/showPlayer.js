import { redacter } from "./redacter.js";

export const createPlayer = () => {
    const payload = document.createDocumentFragment();
    const title = document.createElement("h2");
    const cover = document.createElement("img");
    const artist = document.createElement("h3");
    const metaTags = document.createElement("span");

    title.innerText = redacter.albumTitle;

    cover.src = redacter.albumArt;
    cover.classList.add("lmr-art");

    artist.classList.add("big-man-up-top");
    artist.innerText = redacter.albumArtist;

    metaTags.classList.add("meta-data");
    metaTags.innerText = `${redacter.trackTotal} tracks, ${redacter.timeTotal} long, ${redacter.rLabel}`;

    payload.appendChild(title);
    payload.appendChild(cover);
    payload.appendChild(artist);
    payload.appendChild(metaTags);

    redacter.tracklist.map((e, i) => {
        const songRow = document.createElement("div");
        const tInd = document.createElement("span");
        const tTit = document.createElement("span");
        const tLen = document.createElement("span");

        songRow.classList.add("song-row");
        songRow.id = e.src || "";
        songRow.dataset.sel = 0;
        
        tInd.innerText = i++;
        tTit.innerText = e.titleFull;
        tLen.innerText = e.tracklength;

        // song click
        songRow.addEventListener("click", (e) => {
            const player = document.getElementById("player");
            
            if (e.currentTarget.dataset.sel == 0){
                player.classList.remove("hide");
                e.currentTarget.dataset.sel == 1;
                e.currentTarget.classList.add("selected-track");
            } else {
                e.currentTarget.dataset.sel == 0;
                e.currentTarget.classList.remove("selected-track");
            }
            player.src = e.currentTarget.id;
        })

        songRow.appendChild(tInd);
        songRow.appendChild(tTit);
        songRow.appendChild(tLen);

        payload.appendChild(songRow);
    })

    return payload;
}