console.log("commissioned by the IJA Burner Trust");

(function(){
    // pointers
    const propaView = document.getElementById("propa");


    // view swaps
    const showHome = () => {
        const heroFrag = document.createDocumentFragment();
        const banDiv = document.createElement("div");
        const panicBtn = document.createElement("span");

        banDiv.classList.add("yealol");
        panicBtn.classList.add("panic-btn");
        panicBtn.classList.add("bait");

        panicBtn.innerText = "AHHHHHHHHHHH!";

        banDiv.appendChild(panicBtn);
        heroFrag.appendChild(banDiv);

        propaView.innerText = "";
        propaView.appendChild(heroFrag);
    }

    showHome();
})();