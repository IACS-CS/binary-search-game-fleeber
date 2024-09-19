import "./style.css";
import { TextInterface } from "text-interface";

let binary = 0;

let app = document.querySelector("#app");

// Create a new "Text Interface"
let ti = new TextInterface(app, "What gravity falls character are you?");
var playAgain = true;
var audio = new Audio("/AVs/rain.mp3");
while (playAgain) {
  ti.clear();
  ti.output("Welcome! Lets find out what gravity falls character you are!");
  ti.output("Do you have a job?");
  let answer = await ti.readYesOrNo();
  audio = new Audio("/AVs/rain.mp3");
  audio.loop = true;
  audio.play();
  if (answer) {
    ti.output("Are you tall?");
    answer = await ti.readYesOrNo();
    if (answer) {
      ti.output("Are you a twin?");
      answer = await ti.readYesOrNo();
      if (answer) {
        ti.output("Do you like money");
        answer = await ti.readYesOrNo();
        if (answer) {
          ti.output("You are Grunkle Stan");
          ti.output("(but 'er aim is gettin better)");
          ti.showImage("/chars/stan.gif");
        } else {
          ti.output("You are Grunkle Ford");
          ti.output("NERD!! 🤓☝️");
          ti.showImage("/chars/ford.webp");
        }
      } else if (!answer) {
        answer = await ti.readChoice(["W neck", "V neck"]);
        if (answer == "W neck") {
          ti.output("You are Soos!");
          audio.pause();
          audio = new Audio("/AVs/blanchin.mp3");
          audio.loop = true;
          audio.play();
          ti.showImage("/chars/soos.webp");
        } else {
          ti.output("You are Wendy!");
          ti.output("I thought your parents just hated you or something");
          ti.showImage("/chars/wendy.jpg");
        }
      }
    } else if (!answer) {
      ti.output("Are you a twin?");
      answer = await ti.readYesOrNo();
      if (answer) {
        ti.output("Do you like stickers");
        answer = await ti.readYesOrNo();
        if (answer) {
          ti.output("Hi, Mabel!");
          ti.output("I AM THE GOD OF DISTRUCTION!");
          ti.showImage("/chars/mabel.webp");
        } else {
          ti.output("Wiggity wiggity wazzup, dude bro? You're Dippy Fresh!");
          ti.output("Hi Dipper!!");
          ti.showImage("/chars/tyrone.png");
        }
      } else {
        ti.output("Are you crazy?");
        answer = await ti.readYesOrNo();
        if (answer) {
          ti.output("McSuckit. They got me good");
          ti.showImage("/chars/oldman.png");
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
          ti.output(
            "Crazy? I was crazy once! They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy!!"
          );
        } else {
          ti.output("You are waddles!! :3");
          ti.showImage("/chars/waddles.jpg");
        }
      }
    }
  } else if (!answer) {
    ti.output("Do you prefer to stay in the same place?");
    answer = await ti.readYesOrNo();
    if (answer) {
      ti.output("Are you old?");
      answer = await ti.readYesOrNo();
      if (answer) {
        //Bill or Quenton
        ti.output("Are you 'merican?");
        answer = await ti.readYesOrNo();
        if (answer) {
          ti.output("The 8th and a half president!");
          ti.output("Welcome back, Quentin Trembley III");
          ti.showImage("/chars/president.webp");
        } else {
          ti.output(
            "A-X-O-L-O-T-L YOUR TIME HAS COME TO BURN! DID YOU INVOKE THE ANCIENT POWER TO RETURN?"
          );
          ti.output("Hello there Bill!");
          ti.showImage("/chars/bill.webp");
        }
      } else {
        //Time baby or Blendin
        ti.output("Did an ALL POWERFUL GOD defeat you?");
        answer = await ti.readYesOrNo();
        if (answer) {
          ti.output("I got your choccy milk :>");
          ti.output("For you, Time Baby");
          ti.showImage("/chars/baby.webp");
        } else {
          ti.output("Hi Blandin!");
          ti.output("Nice hair :D");
          ti.showImage("/chars/camo.jpg");
        }
      }
    } else {
      ti.output("Are you gay?");
      answer = await ti.readYesOrNo();
      if (answer) {
        //Blubs and Durland
        ti.output("Do you like bells?");
        answer = await ti.readYesOrNo();
        if (answer) {
          ti.output("Wow! Its Sherrif Durland!");
          ti.output("You really like ringing that bell, don't you?");
          ti.showImage("/chars/gay_bois.webp");
        } else {
          ti.output("Uh-uh no-no bibbity bop kazow");
          ti.output("It's Sherrif Blubs!");
          ti.showImage("/chars/gay_bois.webp");
        }
      } else {
        ti.output("Do you have an enormous pompadour?");
        answer = await ti.readYesOrNo();
        if (answer) {
          ti.output("It's widdle ol' you!");
          ti.output("Widdle ol' Gideon");
          ti.showImage("/chars/widdle.jpg");
        } else {
          ti.output("It's Bodacious T!");
          ti.showImage("/chars/t_man.jpg");
        }
      }
    }
  } else {
    ti.output("idk what to tell you, man. It broke");
  }
  ti.output("Would you like to play again?");
  playAgain = await ti.readYesOrNo();
}
ti.output(
  "Remember! Reality's an illusion, the universe is a hologram, buy gold! Byeeee!"
);
await new Promise((r) => setTimeout(r, 2000));
var test = document.getElementById("everything");
test.innerHTML = "";
audio.pause();
audio = new Audio("/AVs/again.mp3");
audio.loop = true;
audio.play();
