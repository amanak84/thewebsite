let sub = document.querySelector(".sub-button");
let seeMore = document.querySelector(".example-button");
let body = document.querySelector("body")
let nav = document.querySelector(".nav-links")
let toggle = document.querySelector("#nav-toggle");

console.log(nav);
console.log(toggle);


sub.addEventListener("click", ()=>{
    window.open("https://youtube.com/@priyakantju5611?si=o2tC5ngqFM163ppo");
})

seeMore.addEventListener("click", ()=>{
    window.open("https://www.youtube.com/@radhakrishna944/community");
})


toggle.addEventListener("click", ()=>{
    nav.classList.toggle("active")
})