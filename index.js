let arrowEl = document.getElementById("arrow")
let aboutMeEl = document.querySelector(".aboutme_container")

document.addEventListener("click", e => {
    if (e.target.classList.contains('arrow')) {
        window.location = '#aboutme_container'
        history.replaceState(null, null, ' ')
    }
})
