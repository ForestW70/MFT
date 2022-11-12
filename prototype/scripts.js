console.log("commissioned by the IJA Burner Trust");
import { showHome, showAbout, showNews, showVideos, showBlog, showContact, showPriv} from "./lib/pageSwitch.js  ";


(function () {
    // pointers
    const switchBtns = document.querySelectorAll(".sw-btns");

    switchBtns.forEach(e => {
        e.addEventListener("click", () => {
            console.log(e.id);
            switch (e.id) {
                case "home":
                    showHome();
                    break;
                case "about":
                    showAbout();
                    break;
                case "news":
                    showNews();
                    break;
                case "videos":
                    showVideos();
                    break;
                case "blog":
                    showBlog();
                    break;
                case "contr":
                    showContact();
                    break;
                    case "priv":
                    showPriv();
                    break;
                default:
                    showHome();
                    break;
            }
        });
    })

    showHome();
})();