import { redacter } from "./redacter.js";

export const createPlayer = () => {
    const payload = document.createDocumentFragment();
    const player = document.createElement("audio")
    const title = document.createElement("h2");
    const artist = document.createElement("h3");
    const metaTags = document.createElement("span");

    artist.classList.add("big-man-up-top")
    metaTags.classList.add("meta-data");
    title.innerText = redacter.albumTitle;
    artist.innerText = redacter.albumArtist;
    metaTags.innerText = `${redacter.trackTotal} tracks, ${redacter.timeTotal} long, ${redacter.rLabel}`;

    payload.appendChild(player);
    payload.appendChild(title);
    payload.appendChild(artist);
    payload.appendChild(metaTags);

    redacter.tracklist.map((e, i) => {
        const songRow = document.createElement("div");
        const tInd = document.createElement("span");
        const tTit = document.createElement("span");
        const tLen = document.createElement("span");

        songRow.classList.add("song-row");
        tInd.innerText = i++;
        tTit.innerText = e.titleFull;
        tLen.innerText = e.tracklength;

        songRow.appendChild(tInd);
        songRow.appendChild(tTit);
        songRow.appendChild(tLen);

        payload.appendChild(songRow);
    })

    return payload;
}