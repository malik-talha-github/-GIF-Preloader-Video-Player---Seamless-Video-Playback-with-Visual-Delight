const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container")

btn.addEventListener("click" , function(){
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video.pause();
    }
    else{btn.classList.remove("slide");
    video.play();
}
})
//pre loader
// const preloader = document.querySelector(".preloader");
// window.addEventListener("load",function(){
//     preloader.classList.add("hide-preloader")
// })
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function() {
    setTimeout(function() {
        preloader.classList.add("hide-preloader");
    }, 500); // Added a delay of 500 milliseconds
});