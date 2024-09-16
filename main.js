import "./style.css";
import { TextInterface } from "text-interface";

let binary = 0;

let app = document.querySelector("#app");

// Create a new "Text Interface"
let ti = new TextInterface(app, "What gravity falls character are you?");
ti.output("Welcome! Lets find out what gravity falls character you are!");
ti.output("Do you have a job?");
let answer = await ti.readYesOrNo();
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
      } else {
        ti.output("You are Grunkle Ford");
        ti.output("NERD!! 🤓☝️");
      }
    } else if (!answer) {
      answer = await ti.readChoice(["W neck", "V neck"]);
      if (answer == "W neck") {
        ti.output("You are Soos!");
        //set audio player here
      } else {
        ti.output("You are Wendy!");
        ti.output("I thought your parents just hated you or something");
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
      } else {
        ti.output("Wiggity wiggity wazzup, dude bro? You're Dippy Fresh!");
        ti.output("Hi Dipper!!");
      }
    } else {
      ti.output("Are you crazy?");
      answer = await ti.readYesOrNo();
      if (answer) {
        ti.output("McSuckit. They got me good");
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
      } else {
        ti.output(
          "A-X-O-L-O-T-L YOUR TIME HAS COME TO BURN! DID YOU INVOKE THE ANCIENT POWER TO RETURN?"
        );
        ti.output("Hello there Bill!");
      }
    } else {
      //Time baby or Blendin
      ti.output("Did an ALL POWERFUL GOD defeat you?");
      answer = await ti.readYesOrNo();
      if (answer) {
        ti.output("I got your choccy milk :>");
        ti.output("For you, Time Baby");
      } else {
        ti.output("Hi Blandin!");
        ti.output("Where did your hair go?");
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
      } else {
        ti.output("Uh-uh no-no bibbity bop kazow");
        ti.output("It's Sherrif Blubs!");
      }
    } else {
      ti.output("Do you have an enormous pompadour?");
      answer = await ti.readYesOrNo();
      if (answer) {
        ti.output("It widdle ol' you!");
        ti.output("Widdle ol' Gideon");
      } else {
        ti.output("It's Bodacious T!");
      }
    }
  }
} else {
  ti.output("idk what to tell you, man. It broke");
}
