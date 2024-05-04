const openBtn = document.querySelector("button")
const closeBtn = document.querySelector("#close")
const modal = document.querySelector(".modal")

openBtn.addEventListener("click", function() {
    modal.style.display = "flex"
})

function closeModel() {
    modal.style.display = "none"
}

closeBtn.addEventListener("click", function() {
    modal.style.display = "none"
    modal.classList.add("close-model-animation")
    setTimeout(() => {
        modal.style.display = "none"
        window.location.reload()
        },
        300)
})