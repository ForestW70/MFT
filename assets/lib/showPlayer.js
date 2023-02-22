import { redacter } from "./redacter.js";

const popOut = (bigPic) => {
    const popper = document.createDocumentFragment();
    const backdrop = document.createElement("div");
    backdrop.classList.add("backdrop");
    const bigRedact = document.createElement("img");
    bigRedact.src = bigPic;
    bigRedact.id = "focus";

    console.log("poppa");
    backdrop.appendChild(bigRedact);
    popper.appendChild(backdrop);
    document.getElementById("propa").appendChild(popper);

}

export const createPlayer = () => {
    const payload = document.createDocumentFragment();
    const title = document.createElement("h2");
    const cover = document.createElement("img");
    const artist = document.createElement("h3");
    const metaTags = document.createElement("span");

    title.innerText = redacter.albumTitle;

    cover.src = redacter.albumThumb;
    cover.classList.add("lmr-art");

    cover.addEventListener("click", () => {
        const backdrop = document.getElementById("popOut");

        const popper = document.createDocumentFragment();
        backdrop.classList.add("backdrop");
        backdrop.style.zIndex = "1000";
        backdrop.addEventListener("click", (e) => {
            if (e.target.id === "focus") {
                console.log("look harder!")
            } else {
                backdrop.innerHTML = "";
                backdrop.style.zIndex = "-1";
                backdrop.classList.remove("backdrop")

            }
        })


        const bigRedact = document.createElement("img");
        bigRedact.src = redacter.albumArt;
        bigRedact.id = "focus";

        console.log("poppa");
        popper.appendChild(bigRedact);
        backdrop.appendChild(popper);
        document.getElementById("propa").appendChild(popper);
    })

    artist.classList.add("big-man-up-top");
    artist.innerText = redacter.albumArtist;

    metaTags.classList.add("meta-data");
    metaTags.innerText = `${redacter.trackTotal} tracks, ${redacter.timeTotal}, ${redacter.rLabel}`;

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
        songRow.dataset.fullT = e.titleFull;

        tInd.innerText = i++;
        tTit.innerText = e.titleAbr;
        tLen.innerText = e.tracklength;

        // song click
        songRow.addEventListener("click", (e) => {
            const player = document.getElementById("player");
            const onNow = document.getElementById("catcher");

            if (e.currentTarget.dataset.sel == 0) {
                player.classList.remove("hide");
                onNow.classList.remove("hide");
                e.currentTarget.dataset.sel == 1;
                e.currentTarget.classList.add("selected-track");
                onNow.innerText = "";
                onNow.innerText = `"${e.currentTarget.dataset.fullT}"`;
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