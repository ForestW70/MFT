import { blogPosts } from "./blogs.js";
import { aboutInfo } from "./about.js";
import { flexTerms } from "./showTerms.js";
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
    // const consImg = document.createElement("img");
    // consImg.classList.add("under-con");
    // consImg.src = "https://c.tenor.com/X6i3RTlXpmAAAAAM/under-construction-men-at-work.gif";

    // const consText = document.createElement("span");
    // consText.innerText = "Page Under Construction! Come back soon ♥";
    // consText.classList.add("cons-blurb");



    const buildAbout = (abStuffs) => {
        const aboutFrag = document.createDocumentFragment();
        abStuffs.map(e => {
            if (e.type === "h2") {
                const heddy = document.createElement("h2");
                heddy.classList.add("ab-head");
                heddy.innerText = e.body;
                aboutFrag.appendChild(heddy);
            } else if (e.type === "p") {
                const par = document.createElement("p");
                par.classList.add("ab-pp");
                par.innerText = e.body;
                aboutFrag.appendChild(par);
            } else {
                // const rest = document.createElement("span");
                // rest.classList.add("ab-rest");
                // rest.innerText = e.body;
                // aboutFrag.appendChild(rest);
                
                e.body.map(ee => {
                    const srcs = document.createElement("div");
                    srcs.classList.add("ab-rest");
                    const srcN = document.createElement("span");
                    const srcA = document.createElement("a");
                    srcN.innerText = `[${ee.loc}]`;
                    srcA.innerText = ee.item;
                    srcA.href = ee.src;
                    srcA.target = "blank";
                    srcs.appendChild(srcN);
                    srcs.appendChild(srcA);
                    aboutFrag.appendChild(srcs);
                })
            }
        });

        return aboutFrag;
    }
    // propaFrag.appendChild(consImg);
    propaFrag.appendChild(buildAbout(aboutInfo));

    propaView.innerText = "";
    propaView.appendChild(propaFrag);

    const learnMore = document.createElement("button");
    learnMore.id = "lmBtn";
    learnMore.innerText = "Learn More"
    learnMore.addEventListener("click", (e) => {
        showNews();
    })
    propaView.appendChild(learnMore);
}

// News Articles view
export const showNews = () => {
    const propaFrag = document.createDocumentFragment();
    let plsStopCnt = 0;
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
        newsAuth.classList.add("go-2-story")
        newsProp.innerText = `shared by: ${e.poster}`;

        newsAuth.href = e.link;
        newsAuth.target = "blank";

        newsCont.appendChild(newsTit);
        newsCont.appendChild(newsAbs);
        newsCont.appendChild(newsAuth);
        newsCont.appendChild(newsProp);

        if (Math.random() >= .5) {
            if (Math.random() >= .5) {
                propaFrag.appendChild(newsCont);
            } else {
                propaFrag.insertBefore(newsCont, propaFrag.firstChild);
            } 


// will be something maybe one day
            // plsStopCnt++;
            // if (plsStopCnt === 10) {
            //     const noNewsCont = document.createElement("article");
            //     const blueText = document.createElement("p");
            //     blueText.innerText = "please stop texting me";
            //     blueText.classList.add("news-art", "its-you");
            //     noNewsCont.appendChild(blueText);
            //     propaFrag.appendChild(noNewsCont);
            // } 
        } else {

            if (Math.random() >= .5) {
                propaFrag.appendChild(newsCont);
            } else {
                propaFrag.insertBefore(newsCont, propaFrag.firstChild);
            }
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
            pCont.classList.add("hide"); //
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
            viewVar === 0 ? propaFrag.insertBefore(pCont, propaFrag.firstChild) : propaFrag.appendChild(pCont);

        });
        const hider = document.createElement("div");
        hider.classList.add("hide-blog");
        const myConstruc = document.createElement("img");
        myConstruc.src = "https://thumbs.gfycat.com/SleepySadAegeancat-max-1mb.gif";
        const consMessage = document.createElement("p");
        consMessage.innerText = "We'll be right back! -♥Admin";

        hider.appendChild(myConstruc);
        hider.appendChild(consMessage);

        propaView.appendChild(hider);
        propaView.appendChild(viewOrder);
        propaView.appendChild(propaFrag)
    }

    propaView.innerText = "";
    splayBlogs();
}

// fuck around view
export const showContact = () => {
    const propaFrag = document.createDocumentFragment();
    const consImg = flexCons();
    propaFrag.appendChild(consImg);

    propaView.innerText = "";
    propaView.appendChild(propaFrag);
}

// terms and privacy view
export const showPriv = () => {
    const pageTitle = document.createElement("p");
    pageTitle.innerText = "Terms, Conditions, and Privacy"

    const newFill = flexTerms();

    propaView.innerText = "";
    propaView.appendChild(pageTitle);
    propaView.appendChild(newFill);
}