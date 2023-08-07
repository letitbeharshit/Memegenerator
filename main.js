let count = 0
let genememe = document.getElementById('bnt')
let genepickup = document.getElementById('bnt1')
let warning = document.getElementById('warning')
let refresh = document.getElementById('btn3')
// let load = document.getElementsByClassName("loader");
let sound = new Audio();
sound.src = "btnclick.wav";
let sound1 = new Audio();
sound1.src = "btnclick1.mp3";
let sound2 = new Audio();
sound2.src = "error.mp3"
refresh.addEventListener('click', () => {
    sound.play();
    setTimeout(() => {
        location.reload();
    }, 2000);
    refresh.innerText = "Refreshing...";
    let newElement = document.createElement("div")
    newElement.classList.add('loader')
    refresh.insertAdjacentElement('afterend', newElement);
})
genememe.addEventListener('click', generateMeme);
genepickup.addEventListener('click', generatePickUpLine);
function generateMeme() {
    sound1.play();
    let url = fetch("https://meme-api.com/gimme")
    url.then(v => {
        return v.json()
    }).then(meme => {
        memes.innerHTML = `
<div class="box-img">
                <img src="${meme.url}" alt="">
            </div>
            <span>${meme.title}</span>`
        count++
        if (count > 9) {
            genememe.addEventListener('click', function () {
                sound2.play();
                warning.style.display = "block"
            });
        }
    })
}
let pickup_lines = [
    "Are you a campfire? Because you're hot and I want s'more.",
    "Do you have a name, or can I call you mine?",
    "Is your name Wi-Fi? Because I'm feeling a connection.",
    "If you were a vegetable, you'd be a cute-cumber!",
    "Are you a bank loan? Because you have my interest.",
    "Can you take a picture with me? I want to prove to my friends that angels are real.",
    "Do you believe in love at first sight, or should I walk by again?",
    "Are you a camera? Every time I look at you, I smile.",
    "Are you a magician? Whenever I look at you, everyone else disappears.",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "Do you have a name, or can I call you mine?",
    "If you were a fruit, you'd be a fineapple.",
    "Are you a time traveler? Because I can see you in my future.",
    "Is your name Google? Because you have everything I've been searching for.",
    "Do you have a map? I just got lost in your eyes.",
    "Is your dad a baker? Because you're a cutie pie!",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Are you a campfire? Because you're hot and I want s'more.",
    "If beauty were a crime, you'd be serving a life sentence.",
    "Do you have a pencil? Cause I want to erase your past and write our future.",
    "Is your name Chapstick? Because you're da balm!",
    "Are you a camera? Because every time I look at you, I smile.",
    "Do you believe in fate? Because I think we were meant to meet.",
    "If you were a vegetable, you'd be a cute-cumber!",
    "Is your name Wi-Fi? Because I'm feeling a connection.",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "Do you have a name, or can I call you mine?",
    "If kisses were snowflakes, I'd send you a blizzard.",
    "Is your name Google? Because you have everything I've been searching for.",
    "Do you have a map? Because I just got lost in your eyes.",
    "Do you have a sunburn, or are you always this hot?",
    "Are you a campfire? Because you're hot and I want s'more.",
    "Do you have a name, or can I call you mine?",
    "Is your name Wi-Fi? Because I'm feeling a connection.",
    "If you were a vegetable, you'd be a cute-cumber!",
    "Are you a bank loan? Because you have my interest.",
    "Can you take a picture with me? I want to prove to my friends that angels are real.",
    "Do you believe in love at first sight, or should I walk by again?",
    "Are you a camera? Every time I look at you, I smile.",
    "Are you a magician? Whenever I look at you, everyone else disappears.",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "Do you have a name, or can I call you mine?",
    "If you were a fruit, you'd be a fineapple.",
    "Are you a time traveler? Because I can see you in my future.",
    "Is your name Google? Because you have everything I've been searching for.",
    "Do you have a map? I just got lost in your eyes.",
    "Is your dad a baker? Because you're a cutie pie!",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Chapstick? Because you're da balm!",
    "Are you a camera? Because every time I look at you, I smile."
]
function generatePickUpLine() {
    sound.play();
    let ran = Math.floor(Math.random() * pickup_lines.length);
    picluplines.innerHTML = `
        <span>${pickup_lines[ran]}</span>
`
    count++;
    if (count >= 9) {
        genepickup.addEventListener('click', function () {
            sound2.play();
            warning.style.display = "block"
        });
    }
}
// fecting data from api
// function generatePickUpLine(){
//     let url1 = fetch("https://meme-api.com/gimme")
//     url1.then(v => {
//         return v.json()
//     }).then(pickup => {
//         console.log(pickup);
//         picluplines.innerHTML = `
//         <span>${pickup.title}</span>
// `
//     })
// }