export const conGifs = [
    // God bless you http://textfiles.com/underconstruction/
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
    "https://www.fg-a.com/under-construction/2017-under-construction.jpg",
    "http://textfiles.com/underconstruction/CaCapitolHillCongress3062CONSTRUCTION1.GIF",
    "http://textfiles.com/underconstruction/HeHeartlandGarden5828constructionuc3.gif",
    "http://textfiles.com/underconstruction/MaMadisonAvenue6282imagesconstruction.gif",
    "http://textfiles.com/underconstruction/PaParisBistro7538Pikachu_construction.gif",
    "http://textfiles.com/underconstruction/CaCapeCanaveral8167brunounderconstruction.gif",
    "http://textfiles.com/underconstruction/ArArea51Quasar4180underconstruction.gif",
    "http://textfiles.com/underconstruction/Heartland7870construction_major.gif",
    "http://textfiles.com/underconstruction/CoColosseumDugout6041imagesconstruction.gif",
    "http://textfiles.com/underconstruction/HeHeartlandGarden5828constructionfly.gif",
    "http://textfiles.com/underconstruction/HeHeartlandRanch4242Imagesunderconstructionbelly.gif",
    "http://textfiles.com/underconstruction/HoHotSprings4674hazunderconstruct.gif",
    "http://textfiles.com/underconstruction/thefirepoliceconstruction10.gif",
    "http://textfiles.com/underconstruction/HoHollywoodBoulevard7726underconstructionbildersida1uc3.gif",
    "http://textfiles.com/underconstruction/Lair7805construct.gif",
    "http://textfiles.com/underconstruction/CaCapeCanaveralGalaxy8999construction1.gif",
    "http://textfiles.com/underconstruction/ReResearchTriangleNode8151imagesconstruction1.gif",
    "http://textfiles.com/underconstruction/HeHeartlandPointe8782Construction.gif",
    "http://textfiles.com/underconstruction/AtAthensDelphi2923construction.gif",
    "http://textfiles.com/underconstruction/ArArea51Shuttle1525underconstruct.gif",
    "http://textfiles.com/underconstruction/pentagonbarracks1178imagesunder-construction.gif",
];

const localConstruction = [
    "/imgs/construction/con0.gif",
    "/imgs/construction/con1.gif",
    "/imgs/construction/con2.gif",
    "/imgs/construction/con3.gif",
    "/imgs/construction/con4.gif",
    "/imgs/construction/con5.gif",
    "/imgs/construction/con6.gif",
    "/imgs/construction/con7.gif",
    "/imgs/construction/con8.gif",
    "/imgs/construction/con9.gif",
    "/imgs/construction/con10.gif",
    "/imgs/construction/con11.gif",
    "/imgs/construction/con12.gif",
    "/imgs/construction/con13.gif",
    "/imgs/construction/con14.gif",
    "/imgs/construction/con15.gif",
    "/imgs/construction/con16.gif",
    "/imgs/construction/con17.gif",
    "/imgs/construction/con18.gif",
    "/imgs/construction/con19.gif",
    "/imgs/construction/con20.gif",
    "/imgs/construction/con21.gif",
    "/imgs/construction/con22.gif",
    "/imgs/construction/con23.gif",
    "/imgs/construction/con24.gif",
    "/imgs/construction/con25.gif",
    "/imgs/construction/con26.gif",
    "/imgs/construction/con27.gif",
    "/imgs/construction/con28.gif",
    "/imgs/construction/con29.gif",
    "/imgs/construction/con30.gif",
    "/imgs/construction/con31.gif",
    "/imgs/construction/smp0.jpg",
]

export const flexCons = () => {
    const allGifs = document.createDocumentFragment();
    const conCont = document.createElement("section");
    conCont.classList.add("con-grid");

    // gifs surrounding a questionable question in grid
    localConstruction.forEach((e, i) => {
        if (i === 4) {
            const contract4U = document.createElement("div");
            const inq = document.createElement("p");
            const yes = document.createElement("button");
            const no = document.createElement("button");

            contract4U.classList.add("binding-contract");
            inq.innerText = "Would you like to enter a binding contract with us?";
            yes.innerText = "YES";
            no.innerText = "NO";

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
            img.src = "https://marblefreedomtrust.us/assets" + e;
            // conCont.appendChild(img);
            if (Math.random() >= .5) {
                
                conCont.insertBefore(img, conCont.firstChild);
                allGifs.appendChild(conCont);
            } else {
                
                conCont.appendChild(img);
                allGifs.appendChild(conCont);
            }
        }
    });
    
    return allGifs;
}