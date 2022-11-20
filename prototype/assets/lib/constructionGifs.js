export const conGifs = [
    "https://i.pinimg.com/originals/eb/1b/27/eb1b27863813653543914d222ceb9cd0.gif",
    "https://64.media.tumblr.com/f0da7c50d726e64c6c0d8a985240b6f4/dfbbb68a95adf2d4-ce/s250x400/afe73dd5883647200c53408018ed3be99b567b80.gif",
    "https://media0.giphy.com/media/QZIcGPmYMclva/giphy.gif?cid=790b7611fa2c4398428e3ad0b848e97a0bd2c1390b07a17b&rid=giphy.gif&ct=g",
    "https://media.tenor.com/Qr-XdO8yvJkAAAAM/under-construction.gif",
    "https://www.animatedimages.org/data/media/695/animated-under-construction-image-0035.gif",
    "https://thumbs.gfycat.com/ElaborateContentHomalocephale-size_restricted.gif",
    "https://thumbs.gfycat.com/SleepySadAegeancat-max-1mb.gif",
    "https://c.tenor.com/X6i3RTlXpmAAAAAM/under-construction-men-at-work.gif",
    "http://www.animatedgif.net/underconstruction/anim0206-1_e0.gif",
    "https://thumbs.gfycat.com/AdolescentDizzyHare-size_restricted.gif",
    "https://i.gifer.com/51L3.gif",
    "https://media0.giphy.com/media/ZTans30ONaaIM/giphy.gif",
    "https://www.fg-a.com/under-construction/2017-under-construction.jpg"
]

export const flexCons = () => {
    const allGifs = document.createDocumentFragment();
    const conCont = document.createElement("section");
    conCont.classList.add("con-grid");
    conGifs.forEach((e, i) => {
        if (i === 4) {
            const contract4U = document.createElement("div");
            const inq = document.createElement("p");
            const yes = document.createElement("button");
            const no = document.createElement("button");

            contract4U.classList.add("binding-contract");
            inq.innerText = "Would you like to enter a binding contract with us?";
            yes.innerText = "YES";
            // yes.id = "proceed";
            no.innerText = "NO";
            // no.id = "coward";

            yes.addEventListener("click", () => {
                window.alert("Good, please see this page for more information about how you can further intwine with our values.")
                window.location.href = "https://judicialnetwork.com/";
            })

            no.addEventListener("click", () => {
                window.alert("You are clearly not ready.")
                window.location.href = "https://www.google.ru";
            })

            contract4U.appendChild(inq);
            contract4U.appendChild(yes);
            contract4U.appendChild(no);
            conCont.appendChild(contract4U);
            allGifs.appendChild(conCont);
        } else {
            const img = document.createElement("img");
            img.classList.add("allum")
            img.src = e;
            conCont.appendChild(img);
            allGifs.appendChild(conCont);
        }

        // allGifs.appendChild(conCont);
    })
    return allGifs;
}