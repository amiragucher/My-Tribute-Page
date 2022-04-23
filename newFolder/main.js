
const callumHasBeenInsulted = false;
while (!callumHasBeenInsulted) {
  const Response = prompt("Callum is a good guy");
  console.log(Response);
  if (Response === "no") {
    prompt("WRONG ANSWER");
  }else if (Response === "yes") {
    prompt("I KNOW RIGHT");
    callumHasBeenInsulted = true;
  } else {
    alert("Write something ass hole");
  }
}

const nameOfBestBoyFriend = "Callum";
alert(`${nameOfBestBoyFriend} is the best boyfriend ever!`);
