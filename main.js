import "./style.css";
import { AppleTree } from "./src/components/AppleTree.js";
import { DogAnimation } from "./src/components/DogAnimation";

const messages = [
  "Like our apple tree, our love grows stronger each day! 🌱",
  "Can't wait to plant our tree together! 🌳",
  "You're the sweetest apple in my orchard of love! 🍎",
  "Our love story blooms like apple blossoms in spring! 🌸",
  "Together, we'll grow a garden of endless love! 💖",
];

function createBalloons() {
  return ["🌳", "🍎", "💝", "🌸", "💕"]
    .map((emoji) => `<span class="balloon">${emoji}</span>`)
    .join("");
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

document.querySelector("#app").innerHTML = `
  <div class="container animate__animated animate__fadeIn">
    <div class="balloon-container">To: Lizzy</div>
    <h1 class="animate__animated animate__heartBeat">Happy Birthday My Love!</h1>
    
    <div class="scene-container">
      <div class="tree-container animate__animated animate__bounceIn">
        ${AppleTree()}
      </div>
      ${DogAnimation()}
    </div>

    <p class="message animate__animated animate__fadeIn">${getRandomMessage()}</p>
    <div class="heart animate__animated animate__pulse animate__infinite">❤️</div>
    <button style="display:none">Send Love! 💕</button>
  </div>
`;

let messageIndex = 0;
window.addEventListener("showLove", () => {
  const container = document.querySelector(".container");
  container.style.animation = "none";
  container.offsetHeight;
  container.classList.add("animate__animated", "animate__heartBeat");

  // setTimeout(() => {
  const message = document.querySelector(".message");
  messageIndex = (messageIndex + 1) % messages.length;
  message.textContent = messages[messageIndex];
  message.classList.add("animate__animated", "animate__bounceIn");
  // }, 1000);

  // Create floating hearts effect
  const heart = document.createElement("div");
  const hearts = ["❤️", "💕", "💓", "💝", "💗", "💖"];
  const loveyous = [
    "I love you!",
    "Love you for ten thousand years",
    "I like you so much",
    "It's great to have you",
    "You are the most important person in my life",
    "I miss you every day",
    "You are my little sun",
    "Miss you so much",
    "I miss you every minute",
    "Love you every minute",
    "Let's make a baby🍼",
    "I wanna kiss you",
  ];
  heart.innerHTML =
    hearts[Math.ceil(Math.random() * (hearts.length - 1))] +
    "&nbsp;" +
    loveyous[Math.ceil(Math.random() * (loveyous.length - 1))];
  heart.style.position = "fixed";
  heart.style.left = 10 + Math.random() * 60 + "vw";
  heart.style.bottom = Math.random() * 90 + "vh";
  heart.style.animation = "float 4s ease-in-out";
  heart.style.fontSize = "0.7rem";
  heart.style.pointerEvents = "none";
  document.body.appendChild(heart);

  setTimeout(() => document.body.removeChild(heart), 4000);
});

