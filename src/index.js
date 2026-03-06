import './styles.css';


// Main JS index

const toggle = document.getElementById("dayNightToggle");

toggle.addEventListener("click", () => {
    const body = document.querySelector("body");
    const gitDark = document.querySelectorAll(".githubLink")
    const gitLight = document.querySelectorAll(".githubLinkLight")
    const linkDark = document.querySelectorAll(".demoLink");
    const linkLight = document.querySelectorAll(".demoLinkLight")
    if(body.classList.contains("lightmode")){
        body.classList.remove("lightmode");
        gitLight.forEach(git => {
            git.classList.add("hidden")
        });
        gitDark.forEach(git => {
            git.classList.remove("hidden")
        })
        linkLight.forEach(link => {
            link.classList.add("hidden")
        });
        linkDark.forEach(link => {
            link.classList.remove("hidden")
        })

    }else{
        body.classList.add("lightmode");
        gitLight.forEach(git => {
            git.classList.remove("hidden")
        });
        gitDark.forEach(git => {
            git.classList.add("hidden")
        })
        linkLight.forEach(link => {
            link.classList.remove("hidden")
        });
        linkDark.forEach(link => {
            link.classList.add("hidden")
        });
    }
})