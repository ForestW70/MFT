import { blogPosts } from "./blogs.js";
import { expTerms } from "./showTerms.js";
import { flexCons } from "./constructionGifs.js";
import { createPlayer } from "./showPlayer.js";
import { newsArticles } from "./news.js";

// view swaps

const propaView = document.getElementById("propa");

// Home View
export const showHome = () => {
    const propaFrag = document.createDocumentFragment();
    const banDiv = document.createElement("div");
    const panicBtn = document.createElement("span");
    const consImg = document.createElement("img");

    banDiv.classList.add("yealol");
    consImg.src = "https://i.gifer.com/51L3.gif";
    
    banDiv.appendChild(consImg);
    propaFrag.appendChild(banDiv);

    propaView.innerText = "";
    propaView.appendChild(propaFrag);
}

// About page view *empty*
export const showAbout = () => {
    const propaFrag = document.createDocumentFragment();
    const consImg = document.createElement("img");
    consImg.classList.add("under-con");
    consImg.src = "https://c.tenor.com/X6i3RTlXpmAAAAAM/under-construction-men-at-work.gif";

    const consText = document.createElement("span");
    consText.innerText = "Page Under Construction! Come back soon ♥";
    consText.classList.add("under-cons");

    propaFrag.appendChild(consImg);
    propaFrag.appendChild(consText);

    propaView.innerText = "";
    propaView.appendChild(propaFrag);
}

// News Articles view
export const showNews = () => {
    const propaFrag = document.createDocumentFragment();
    
    // render news obj
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

        if (Math.random() >= .5) {
            propaFrag.appendChild(newsCont);
        } else {
            propaFrag.insertBefore(newsCont, propaFrag.firstChild);
        }

    });

    propaView.innerText = "";
    propaView.appendChild(propaFrag);
}

// Redacter view
export const showVideos = () => {
    const propaFrag = document.createDocumentFragment();
    propaFrag.appendChild(createPlayer());

    propaView.innerText = "";
    propaView.appendChild(propaFrag);
}

// blog post view
export const showBlog = () => {
    const propaFrag = document.createDocumentFragment();
    const viewOrder = document.createElement("p");
    viewOrder.classList.add("blog-order");
    viewOrder.innerText = "Showing newest first";
    
    // change view order
    let viewVar = 1;
    viewOrder.addEventListener("click", () => {
        if (viewVar === 1) {
            viewVar = 0;
            viewOrder.innerText = "Showing oldest first";
           
        } else {
            viewVar = 1;
            viewOrder.innerText = "Showing newest first";

        }

        propaView.innerText = "";
        splayBlogs();

    })


    // render blog obj
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

            // change render dir based on var
            viewVar === 1 ? propaFrag.insertBefore(pCont, propaFrag.firstChild) : propaFrag.appendChild(pCont);
            
        });

        propaView.appendChild(viewOrder);
        propaView.appendChild(propaFrag)
    }

    propaView.innerText = "";
    splayBlogs();
}

export const showContact = () => {
    const propaFrag = document.createDocumentFragment();
    const consImg = flexCons();
    propaFrag.appendChild(consImg);

    propaView.innerText = "";
    propaView.appendChild(propaFrag);
}

export const showPriv = () => {
    // const propaFrag = document.createDocumentFragment();

    const pageTitle = document.createElement("p");
    pageTitle.innerText = "Terms, Conditions, and Privacy"

    const newFill = expTerms();

    propaView.innerText = "";
    propaView.appendChild(pageTitle);
    propaView.appendChild(newFill);
}