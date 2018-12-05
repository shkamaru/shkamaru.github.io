function init() {
    var el = document.querySelector("#project-nav");
    el.addEventListener("click", scrollToProjects);
}

function scrollToProjects() {
    var projects = document.querySelector("#projects");
    projects.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
}

window.addEventListener("load", init)
