import { blogPosts } from "./blogs.js";
import { expTerms } from "./showTerms.js";
import { flexCons } from "./constructionGifs.js";
import { createPlayer } from "./showPlayer.js";
import { newsArticles } from "./news.js";

// view swaps

const propaView = document.getElementById("propa");

const consText = document.createElement("span");
consText.innerText = "Page Under Construction! Come back soon ♥";
consText.classList.add("under-cons");

export const showHome = () => {
    const propaFrag = document.createDocumentFragment();
    const banDiv = document.createElement("div");
    const panicBtn = document.createElement("span");
    const consImg = document.createElement("img");

    banDiv.classList.add("yealol");
    // panicBtn.classList.add("panic-btn");
    // panicBtn.classList.add("bait");

    consImg.src = "https://i.gifer.com/51L3.gif";

    panicBtn.innerText = "AHHHHHHHHHHH!";

    // banDiv.appendChild(panicBtn);
    banDiv.appendChild(consImg);
    propaFrag.appendChild(banDiv);

    propaView.innerText = "";
    propaView.appendChild(propaFrag);
}

export const showAbout = () => {
    const propaFrag = document.createDocumentFragment();
    const consImg = document.createElement("img");
    consImg.classList.add("under-con");
    consImg.src = "https://c.tenor.com/X6i3RTlXpmAAAAAM/under-construction-men-at-work.gif";

    propaFrag.appendChild(consImg);
    propaFrag.appendChild(consText);

    propaView.innerText = "";
    propaView.appendChild(propaFrag);
}

export const showNews = () => {
    const propaFrag = document.createDocumentFragment();
    // const consImg = document.createElement("img");
    // consImg.classList.add("under-con");
    // consImg.src = "https://thumbs.gfycat.com/AdolescentDizzyHare-size_restricted.gif";
    const newArt = document.createElement("img");
    const newArt1 = document.createElement("img");
    const newArt2 = document.createElement("img");

    // newArt.src = "./imgs/new.gif"

    newsArticles.map(e => {
        const newsCont = document.createElement("article");
        const newsTit = document.createElement("h3");
        const newsAbs = document.createElement("p");
        const newsAuth = document.createElement("a");
        const newsProp = document.createElement("span");

        newsCont.classList.add("news-art");

        newsTit.innerText = e.title;
        newsAbs.innerText = e.body;
        newsAuth.innerText = `${e.source}, ${e.author}, ${e.date}`;
        newsProp.innerText = `shared by: ${e.poster}`;

        newsAuth.href = e.link;
        newsAuth.target = "blank";



        newsCont.appendChild(newsTit);
        newsCont.appendChild(newsAbs);
        newsCont.appendChild(newsAuth);
        newsCont.appendChild(newsProp);

        const randVar = Math.random();

        if (randVar >= .5) {
            propaFrag.appendChild(newsCont);
        } else {
            propaFrag.insertBefore(newsCont, propaFrag.firstChild)
        }

    })


    // const splayNews = () => {


    // }
    // propaFrag.appendChild(consImg);
    // propaFrag.appendChild(newsCont);

    propaView.innerText = "";
    propaView.appendChild(propaFrag);
}

export const showVideos = () => {
    const propaFrag = document.createDocumentFragment();
    // const consImg = document.createElement("img");
    // consImg.classList.add("under-con");
    // consImg.src = "https://i.pinimg.com/originals/eb/1b/27/eb1b27863813653543914d222ceb9cd0.gif";

    // propaFrag.appendChild(consImg);
    // propaFrag.appendChild(consText);

    propaFrag.appendChild(createPlayer());

    propaView.innerText = "";
    propaView.appendChild(propaFrag);
}

export const showBlog = () => {
    const propaFrag = document.createDocumentFragment();
    // const consImg = document.createElement("img");
    // consImg.classList.add("under-con");
    // consImg.src = "https://64.media.tumblr.com/f0da7c50d726e64c6c0d8a985240b6f4/dfbbb68a95adf2d4-ce/s250x400/afe73dd5883647200c53408018ed3be99b567b80.gif";

    // propaFrag.appendChild(consImg);
    // propaFrag.appendChild(consText);
    let viewVar = 1;
    const viewOrder = document.createElement("p");
    viewOrder.classList.add("blog-order");
    viewOrder.innerText = "Showing newest first"
    

    viewOrder.addEventListener("click", () => {
        if (viewVar === 1) {
            viewVar = 0;
            viewOrder.innerText = "Showing oldest first";
            // propaView.innerText = "";
            // splayBlogs();
            // propaView.appendChild(blogs);
        } else {
            viewVar = 1;
            viewOrder.innerText = "Showing newest first";
        }
        propaView.innerText = "";
        splayBlogs();

    })
    

    // meat
    const splayBlogs = () => {
        blogPosts.map(e => {
            const pTitle = document.createElement("h3");
            const pAuth = document.createElement("span");
            const pImg = document.createElement("img");
            const pBody = document.createElement("p");

            pTitle.innerText = e.postTitle;
            pAuth.innerText = `Posted by: ${e.postAuth} on ${e.postDate}`;
            pImg.src = e.postImg;
            pBody.innerText = e.postBody;

            const pCont = document.createElement("article");
            pCont.classList.add("blog-post");
            pCont.appendChild(pTitle);
            pCont.appendChild(pAuth);
            pCont.appendChild(pImg);
            e.postBody.map(ee => {
                const newParagraph = document.createElement("p");
                newParagraph.innerText = ee.par;
                pCont.appendChild(newParagraph);

            });
            

            if (viewVar == 1) {
                propaFrag.insertBefore(pCont, propaFrag.firstChild);
                
            } else {
                propaFrag.appendChild(pCont);
                
            }

        })
        propaView.appendChild(viewOrder);
        propaView.appendChild(propaFrag)
    }
    propaView.innerText = "";
    splayBlogs();



}

export const showContact = () => {
    const propaFrag = document.createDocumentFragment();



    const consImg = flexCons();
    // propaFrag.appendChild(consText);
    propaFrag.appendChild(consImg);

    propaView.innerText = "";
    propaView.appendChild(propaFrag);
}

export const showPriv = () => {
    const propaFrag = document.createDocumentFragment();
    const consImg = document.createElement("img");
    consImg.classList.add("under-con");
    consImg.src = "https://www.animatedimages.org/data/media/695/animated-under-construction-image-0035.gif";

    const pageTitle = document.createElement("p");
    pageTitle.innerText = "Terms, Conditions, and Privacy"

    const newFill = expTerms();
    // propaFrag.appendChild(consImg);
    // propaFrag.appendChild(consText);

    propaView.innerText = "";
    propaView.appendChild(pageTitle);
    propaView.appendChild(newFill);
}