/* =========================
FINAL JS
========================= */

/* PAGE */

function nextPage(pageId){

  document
    .querySelectorAll('.page')
    .forEach(page=>{
      page.classList.remove('active');
    });

  document
    .getElementById('page'+pageId)
    .classList.add('active');
}

/* PASSWORD */
const music =
document.getElementById("bg-music");

function checkPassword(){

  const password =
    document.getElementById("password").value;

  const correctPassword = "28052003";

  if(password === correctPassword){

    document
      .getElementById("lockScreen")
      .style.display = "none";

    document
      .getElementById("website")
      .style.display = "block";

    /* PLAY MUSIC */

    music.volume = 0.5;

    const playPromise =
      music.play();

    if(playPromise !== undefined){

      playPromise.catch(error=>{

        console.log(
          "Autoplay diblokir"
        );
      });
    }

  }else{

    document
      .getElementById("errorText")
      .innerHTML =
      "Password salah 😢";
  }
}


/* MUSIC */

function toggleMusic(){

  if(music.paused){

    music.play();

  }else{

    music.pause();
  }
}

/* LOGOUT */

function logoutWebsite(){

  location.reload();
}

/* HUJAN HATI */

setInterval(()=>{

  let heart =
    document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "💙";

  heart.style.left =
    Math.random()*100 + "vw";

  heart.style.fontSize =
    (Math.random()*20 + 15) + "px";

  heart.style.animationDuration =
    (Math.random()*3 + 4) + "s";

  document.body.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },7000);

},300);

/* =========================
AUTO SLIDE FOTO
========================= */

window.onload = function(){

  const slides =
    document.getElementById("slides");

  const images =
    document.querySelectorAll("#slides img");

  let index = 0;

  function autoSlide(){

    index++;

    if(index >= images.length){

      index = 0;
    }

    const imageWidth =
      images[0].clientWidth;

    slides.style.transform =
      `translateX(-${index * imageWidth}px)`;
  }

  setInterval(autoSlide,3000);
}

/* =========================
COUNTDOWN
========================= */

const birthday =
new Date("May 28, 2026 00:00:00")
.getTime();

const countdown =
setInterval(()=>{

  const now =
    new Date().getTime();

  const distance =
    birthday - now;

  if(distance <= 0){

    clearInterval(countdown);

    document
      .querySelector(".countdown")
      .innerHTML =

      `<div style="
        grid-column:span 4;
        padding:20px;
        font-size:22px;
        font-weight:bold;
      ">
      🎂 HAPPY BIRTHDAY AYUMMM ❤️
      </div>`;

    return;
  }

  const days =
    Math.floor(
      distance /
      (1000*60*60*24)
    );

  const hours =
    Math.floor(
      (distance %
      (1000*60*60*24)) /
      (1000*60*60)
    );

  const minutes =
    Math.floor(
      (distance %
      (1000*60*60)) /
      (1000*60)
    );

  const seconds =
    Math.floor(
      (distance %
      (1000*60)) / 1000
    );

  document
    .getElementById("days")
    .innerHTML = days;

  document
    .getElementById("hours")
    .innerHTML = hours;

  document
    .getElementById("minutes")
    .innerHTML = minutes;

  document
    .getElementById("seconds")
    .innerHTML = seconds;

},1000);

function specialLove(){

  const popup =
    document.getElementById("lovePopup");

  popup.classList.add("show");

  setTimeout(()=>{

    popup.classList.remove("show");

  },3000);

  /* LOVE BURST */

  for(let i=0;i<40;i++){

    let heart =
      document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💙";

    heart.style.left =
      Math.random()*100 + "vw";

    heart.style.fontSize =
      (Math.random()*25 + 20) + "px";

    heart.style.animationDuration =
      (Math.random()*2 + 2) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
      heart.remove();
    },4000);
  }
}

/* =========================
PREV PAGE
========================= */

function prevPage(pageId){

  document
    .querySelectorAll('.page')
    .forEach(page=>{

      page.classList.remove('active');

    });

  document
    .getElementById('page'+pageId)
    .classList.add('active');
}
