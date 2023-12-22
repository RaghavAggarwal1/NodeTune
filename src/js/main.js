import styles from "../css/styles.css";
import * as facebookModel from "./model/facebook.js";
import $ from "jquery";

// After click on loginBtn, register event to initFB() in facebookModel
$(function(){
    $("#loginBtn").on("click", () => {
        facebookModel.initFB();
    });
});


$(function backgroundLaunch(){
  const colours = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
  const numBalls = 200;
  const balls = [];

  for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colours[Math.floor(Math.random() * colours.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;
    
    balls.push(ball);
    $('body').append(ball);
  };

  balls.forEach((el, i, ra) => {
    let to = {
      x: Math.random() * (i % 2 === 0 ? -11 : 11),
      y: Math.random() * 450
    };
    let anim = el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)`}
      ],
      {
        duration: (Math.random() + 1) * 7000,
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );
  });
});
