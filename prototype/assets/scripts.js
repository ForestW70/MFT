console.log("commissioned by the IJA Burner Trust");
import { showHome, showAbout, showNews, showVideos, showBlog, showContact, showPriv} from "./lib/pageSwitch.js  ";


(function () {
    // submit btn
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", () => {
        if (runValidCheck() === 1) {
            window.alert("What are you, dumb? Don't submit that!");
        } else {
            window.alert("Please enter valid credentials!");
        }
    })

    const emailReg = /[@.]/g
    const zipReg = /[0-9]{5}/
    const ssnReg = /^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/ // too lazy https://stackoverflow.com/a/4087485

    const runValidCheck = () => {
        if (
            document.getElementById("in0").value.length > 0
            && document.getElementById("in1").value.length > 0
            && emailReg.test(document.getElementById("in2").value) == true
            && zipReg.test(document.getElementById("in3").value) == true
            && ssnReg.test(document.getElementById("in4").value) == true
        ) {
            return 1
        } else {
            return 0;

        }
               
    }

    // View switch
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
                    showNews();
                    break;
            }
        });
    })

    showHome();
})();