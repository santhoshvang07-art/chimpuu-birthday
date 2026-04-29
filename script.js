let currentPage = 1;
let pageHistory = [];

/* PAGE NAVIGATION */

function nextPage(n){

    console.log("Navigating to page:", n);
    
    if(currentPage < n){
    pageHistory.push(currentPage);
}
let pages=document.querySelectorAll(".page");

/* hide all pages */
pages.forEach(p=>{
p.classList.remove("active");
});

/* show next page */
let next=document.getElementById("page"+n);
if(next){
    next.classList.add("active");
}else{
    console.error("Page not found: page"+n)
}

if(n == 1){
    pageHistory = [];
    currentPage = 1;
}

/* PAGE 2 LOGIC */
if(n==2){

birthdayIndex = 0;

let text = document.getElementById("birthdayText");
if(text) text.innerHTML = "";

let sub = document.getElementById("birthdaySub");
if(sub) sub.textContent = "";

/* hide button */
let btn = document.getElementById("birthdayNextBtn");
if(btn){
btn.classList.remove("show");
}

/* START typing AFTER page is visible */
setTimeout(()=>{
birthdayTyping();
},100);
}

/* PAGE 3 */
if(n==3){
showAge();
}

if(n==6){

let text = document.getElementById("memoryText");
let btn = document.getElementById("memoryTextNextBtn");

/* reset */
text.classList.remove("show");
btn.classList.remove("show");
text.innerHTML = "";

/* set text */
setTimeout(()=>{
text.innerHTML = "Some memories… stay special.";
text.classList.add("show");
},300);

/* show button */
setTimeout(()=>{
btn.classList.add("show");
},1500);

}

if(n == 16){   // or your actual page number

moodLineIndex="0";
moodCharIndex="0";

document.getElementById("moodText").innerHTML="";

setTimeout(()=> {
    moodTyping();
},200);

let btn = document.getElementById("moodNextBtn");
if(btn){
btn.classList.remove("show");
btn.style.opacity = "0";
btn.style.pointerEvents = "none";

}
}

if(n==5){
let btn = document.getElementById("memoryNextBtn");

if(openedCount < 5){
    if(btn){
        btn.style.opacity = "0";
        btn.style.pointerEvents = "none";
    }
}
}

if (n == 17) {
  // Reset typing effect every time the page is entered
  giftIndex = 0;
  document.getElementById("giftText").innerHTML = "";

  // Start typing effect
  setTimeout(() => {
    giftTyping();
  }, 200);
}

if(n==18){

let textEl = document.getElementById("giftHintText");

if(textEl){
textEl.innerHTML = giftHintMessage;
}

let btn = document.getElementById("giftHintNextBtn");

if(btn){
btn.classList.remove("show");
}

setTimeout(()=>{
if(btn){
btn.classList.add("show");
}
},1500);

}

if(n==19){

let textEl = document.getElementById("gift2Text");

if(textEl){
textEl.innerHTML = gift2Message;
}

let btn = document.getElementById("gift2NextBtn");

if(btn){
btn.classList.remove("show");
}

setTimeout(()=>{
if(btn){
btn.classList.add("show");
}
},1500);

}

if(n==20){

let textEl = document.getElementById("listenText");

if(textEl){
textEl.innerHTML = listenMessage;
}

let btn = document.getElementById("listenNextBtn");

if(btn){
btn.classList.remove("show");
}

/* slightly longer pause (feels deeper) */
setTimeout(()=>{
if(btn){
btn.classList.add("show");
}
},1800);

}

if(n==21){

let btn = document.getElementById("revealBtn");
let img = document.getElementById("finalPhoto");
let next = document.getElementById("photoNextBtn");

if(btn) btn.style.display = "block";

if(img) img.classList.remove("show");

if(next) next.classList.remove("show");

}

if(n==22){

let hidden = document.getElementById("hiddenMessage");
let btn = document.getElementById("hiddenNextBtn");

/* 🔄 RESET FIRST */
if(hidden){
hidden.classList.remove("show");
hidden.innerHTML = "";
}

if(btn){
btn.classList.remove("show");
}

/* 🎯 THEN RUN ANIMATION */

/* show text */
setTimeout(()=>{
hidden.innerHTML = `Stay safe and Stay happy.
And just remember… I care about you.
Thank you for being part of my life,
and Thank you for being you.
You are always my favourite kothii 🐒💖`;

hidden.classList.add("show");
},400);

/* show next button */
setTimeout(()=>{
btn.classList.add("show");
},1700);

}

if(n==23){

let text1 = document.getElementById("endText");
let text2 = document.getElementById("endText2");

/* reset */
text1.classList.remove("show");
text2.classList.remove("show","bounce");
text2.innerHTML = "";

/* first text fade in */
setTimeout(()=>{
text1.classList.add("show");
},200);

/* fade out first text */
setTimeout(()=>{
text1.classList.remove("show");
},3000);

/* second text appears */
setTimeout(()=>{
text2.innerHTML = `Inkaa em chusthunnav raa kothii…
Aipoyindhi le… poi padukoo 😜`;
text2.classList.add("show");
},3600);

/* bounce effect */
setTimeout(()=>{
text2.classList.add("bounce");
},3900);

/* soft particles */
setTimeout(()=>{
// sparkleBurst();
},4200);

}
currentPage = n;
toggleBackButton();
handlePageLoad(n);

}

function loveBurst(x, y){
console.log("loveBurst working")
for(let i=0;i<25;i++){

let p=document.createElement("div");
p.className="loveParticle";

/* position */
p.style.left = x + "px";
p.style.top = y + "px";

/* random direction */
let angle = Math.random()*2*Math.PI;
let distance = Math.random()*100;

let moveX = Math.cos(angle)*distance + "px";
let moveY = (Math.sin(angle)*distance - 80) + "px";

p.style.setProperty("--x", moveX);
p.style.setProperty("--y", moveY);

/* soft colors */
let colors = ["#ff6b9a","#ffd6e0","#ffc0cb","#ff9ec4"];
p.style.background = colors[Math.floor(Math.random()*colors.length)];

document.body.appendChild(p);

setTimeout(()=>{
p.remove();
},1500);

}
}

/* CONFETTI FUNCTION (used later for birthday page) */

function celebrate(){

confetti({
particleCount:300,
spread:150
});

setTimeout(()=>{
confetti({
particleCount:200,
spread:180
});
},500);

}


/* TYPING EFFECT */

let aboutTextMessage = `Your energy, your random happiness,
the way you care about people,
and even your beautiful eyes…

that’s what makes you different.`;

let i=0;

function typeEffect(){

if(i<aboutTextMessage.length){

document.getElementById("typing").innerHTML+=aboutTextMessage.charAt(i);

i++;

setTimeout(typeEffect,35);

}

}

typeEffect();


/* FLOATING HEARTS BACKGROUND */

setInterval(()=>{

let heart = document.createElement("div");

heart.className = "heart";
heart.innerHTML = "❤";

heart.style.left = Math.random()*100 + "vw";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

},250);


/* MEMORY IMAGE SLIDER */

let slideIndex=0;

setInterval(()=>{

let slides=document.querySelectorAll(".slide");

/* STOP if no slides exist */
if(slides.length === 0) return;

/* remove active */
slides.forEach(s=>s.classList.remove("active"));

slideIndex++;

/* reset index */
if(slideIndex >= slides.length){
slideIndex = 0;
}

/* SAFE add */
if(slides[slideIndex]){
slides[slideIndex].classList.add("active");
}

},3000);


/* INTRO SCREEN */

function startStory(){

document.getElementById("introScreen").style.opacity="0";

setTimeout(()=>{
document.getElementById("introScreen").style.display="none";
},800);

}

let birthdayMessage = "Haappiieeee Birthdayyyy raaa kothiiiii !!!";
let birthdayIndex = 0;

function birthdayTyping(){

    let btn=document.getElementById("biryhdayNextBtn");
    if(btn){
        btn.classList.remove("show");
    }
if(birthdayIndex < birthdayMessage.length){

document.getElementById("birthdayText").innerHTML += birthdayMessage.charAt(birthdayIndex);

birthdayIndex++;

setTimeout(birthdayTyping,60);

}else{

console.log("Typing finished");

/* animations */
confetti({
particleCount:200,
spread:120
});

sparkleBurst();
birthdayAura();

/* subtitle */
let sub=document.getElementById("birthdaySub");
sub.textContent="Today is all about you.";

/* 🔥 SHOW BUTTON AFTER DELAY */
setTimeout(()=>{

console.log("Trying to show button");

let btn=document.getElementById("birthdayNextBtn");

console.log("Button element:", btn);

if(btn){
btn.classList.add("show")
console.log("Button shown with class");
}

},1500);

}

}

window.onload=function(){

setInterval(function(){

let container=document.getElementById("particles");

let particle=document.createElement("div");
particle.className="particle";

/* random horizontal position */
particle.style.left=Math.random()*100+"vw";

/* random size */
let size=Math.random()*8+4;
particle.style.width=size+"px";
particle.style.height=size+"px";

/* pastel colors */
let colors=[
"#ffd6e0",
"#ffe9a3",
"#e6d6ff",
"#ffcfe8",
"#fff4c9",
"#e8f6ff"
];

particle.style.background=colors[Math.floor(Math.random()*colors.length)];

/* random speed */
particle.style.animationDuration=(Math.random()*6+8)+"s";

container.appendChild(particle);

setTimeout(function(){
particle.remove();
},12000);

},350);

}

function sparkleBurst(){

    let colors=[
        "#ffffff",
        "#ffd6e0",
        "#ffe9a3",
        "#e6d6ff",
        "#ffcfe8"
    ];

for(let i=0;i<30;i++){

let sparkle=document.createElement("div");
sparkle.className="sparkle";

sparkle.style.background=colors[Math.floor(Math.random()*colors.length)];
sparkle.style.left=Math.random()*window.innerWidth+"px";
sparkle.style.top=Math.random()*window.innerHeight+"px";

let size=Math.random()*10+8;
sparkle.style.width.size+"px";
sparkle.style.height.size+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{
sparkle.remove();
},1200);

}

}

function birthdayAura(){

let aura=document.createElement("div");
aura.className="birthdayAura";

/* place aura roughly center */
aura.style.left=(window.innerWidth/2-60)+"px";
aura.style.top=(window.innerHeight/2-60)+"px";

document.body.appendChild(aura);

setTimeout(()=>{
aura.remove();
},1200);

}

function showAge(){

let bg=document.querySelector(".bg18");

/* reset */
bg.classList.remove("show");

/* animate */
setTimeout(()=>{
bg.classList.add("show");
},200);

}

let openedCount = 0;
let zCounter = 1000;

function openMemory(element){

let balloon = element.classList.contains("memoryPhoto")
    ? element.parentElement
    : element;

let img = balloon.querySelector(".memoryPhoto");
let balloonImg = balloon.querySelector(".balloonImg");
let caption = balloon.querySelector(".photoCaption");

let allImages = document.querySelectorAll(".memoryPhoto");
let index = Array.from(allImages).indexOf(img);


/* ===================== */
/* FIRST CLICK */
/* ===================== */

if(!img.classList.contains("show")){

    balloonImg.style.display = "none";

    img.classList.add("show");
    img.classList.add("polaroid");

    openedCount++;

    img.style.zIndex = ++zCounter;

    img.style.top = "50%";
    img.style.left = "50%";

    let firstScale = window.innerWidth <= 600 ? 0.8 : 1;

if(index === 4){
    img.style.transform = `translate(-50%, -50%) scale(${firstScale})`;
} else {
    img.style.transform = `translate(-50%, -50%) scale(${firstScale})`;
}

    /* show caption on first click */
    if(caption){
        caption.style.display = "block";
    }

    let openedImages = document.querySelectorAll(".memoryPhoto.show").length;

    if(openedImages === 5){

        setTimeout(()=>{

            let btn = document.getElementById("memoryNextBtn");

            if(btn){

                btn.style.opacity = "0";
                btn.style.pointerEvents = "none";

                setTimeout(()=>{
                    btn.style.opacity = "1";
                    btn.style.pointerEvents = "auto";
                },50);

            }

        },700);
    }

    loveBurst(window.innerWidth/2, window.innerHeight/2);

    return;
}


/* ===================== */
/* SECOND CLICK (SCATTER) */
/* ===================== */

if(!img.classList.contains("scattered")){

    img.classList.add("scattered");

    let positions = [
        {top:"35%", left:"25%", rotate:-15},
        {top:"30%", left:"70%", rotate:12},
        {top:"65%", left:"25%", rotate:-10},
        {top:"70%", left:"75%", rotate:15},
        {top:"50%", left:"50%", rotate:5}
    ];

    let pos = positions[index];

    /* hide caption on second click */
    if(caption){
        caption.style.display = "none";
    }

    if(index === 4){
        img.style.zIndex = 9999;
    } else {
        img.style.zIndex = ++zCounter;
    }

    img.style.top = pos.top;
    img.style.left = pos.left;

    let scatterScale = window.innerWidth <= 600 ? 0.65 : 1;

img.style.transform =
`translate(-50%, -50%) scale(${scatterScale}) rotate(${pos.rotate}deg)`;
}

}

let moodLines = [
"Anyways.....",
"",
"Haappiieeee Birthdayyyy raaa kothiiiii !!!"
];



let moodLineIndex = 0;
let moodCharIndex = 0;

function moodTyping(){

let textEl = document.getElementById("moodText");

/* all lines done */
if(moodLineIndex >= moodLines.length){

confetti({
particleCount:300,
spread:150,
origin:{ y:0.6 }
});

sparkleBurst();
loveBurst(window.innerWidth/2, window.innerHeight/2);

setTimeout(()=>{
confetti({
particleCount:150,
spread:120,
origin:{ y:0.7 }
});
},500);

/* ✅ SAME PATTERN AS BIRTHDAY PAGE */
setTimeout(()=>{
let btn = document.getElementById("moodNextBtn");
if(btn){
btn.classList.add("show");
btn.style.opacity="1";
btn.style.pointerEvents="auto";
}
},1200);

return;
}

let currentLine = moodLines[moodLineIndex];

/* typing characters */
if(moodCharIndex < currentLine.length){

textEl.innerHTML += currentLine.charAt(moodCharIndex);
moodCharIndex++;

setTimeout(moodTyping,60);

}else{

/* line finished → move to next */
textEl.innerHTML += "\n";

moodLineIndex++;
moodCharIndex = 0;

/* pause between lines */
setTimeout(moodTyping,600);
}

}

let giftMessage = "But wait...\n\nThere’s something small I wanted to give you.";
let giftIndex = 0;

function giftTyping() {
  let textEl = document.getElementById("giftText");

  if (giftIndex < giftMessage.length) {
    textEl.innerHTML += giftMessage.charAt(giftIndex);
    giftIndex++;

    setTimeout(giftTyping, 60);  // Adjust typing speed
  } else {
    // Show the "Next" button after typing completes
    setTimeout(() => {
      let btn = document.getElementById("giftNextBtn");
      if (btn) {
        btn.classList.add("show");
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto"; // make it clickable
      }
    }, 1000);  // Delay before showing the button
  }
}

/* TEXT */
let giftHintMessage = 
`Nikoka konchem special ga idham anukunna…
kani adhi dorakaledhu 😔

Andhuke ippatiki chocolate tho saripettina raa…
choorrryyy 😔🍫`;

let gift2Message = 
`Adhokkate kaadu…

Nikosam inkokati kuda undhi 👀

Idhi konchem special…

Open chesthe telusthundi 😉`;

let listenMessage = 
`You talk…

I listen.

And somehow,
I remember everything :)`;

function revealPhoto(){

let btn = document.getElementById("revealBtn");
let img = document.getElementById("finalPhoto");
let next = document.getElementById("photoNextBtn");

/* hide button immediately */
btn.style.display = "none";

/* delay → show photo */
setTimeout(()=>{
img.classList.add("show");

/* subtle sparkle */
sparkleBurst();

},400);

/* delay → show next button */
setTimeout(()=>{
next.classList.add("show");
},1800);

}

function prevPage(){

    if(pageHistory.length === 0) return;

    let prev = pageHistory.pop();
    currentPage = prev;

    // DON'T push again
    showPageDirect(prev);
}

function prevPage(){

    if(pageHistory.length === 0) return;

    let prev = pageHistory.pop();
    currentPage = prev;

    showPageDirect(prev);

    // 🔥 full reset when reaching start
    if(prev === 1){
        pageHistory = [];
        currentPage = 1;
    }
}

function toggleBackButton(){

    let btn = document.getElementById("globalBackBtn");

    if(pageHistory.length > 0 && currentPage > 2){
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
    console.log("Current:", currentPage, "History:", pageHistory.length);
}

function handlePageLoad(n){

    /* MEMORY PAGE */
    if(n == 5){

        let btn = document.getElementById("memoryNextBtn");

        if(openedCount === 5){
            if(btn){
                btn.style.opacity = "1";
                btn.style.pointerEvents = "auto";
            }
        }
    }
}

function showPageDirect(n){

    let pages = document.querySelectorAll(".page");

    pages.forEach(p => p.classList.remove("active"));

    let page = document.getElementById("page"+n);

    if(page){
        page.classList.add("active");
    }
}

function enterFullscreen(){

  let el = document.documentElement;

  if(el.requestFullscreen){
    el.requestFullscreen();
  }

  // then go to next page
  nextPage(1);
}
