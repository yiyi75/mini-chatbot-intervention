document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});


function output(input) {
  let product;
  let text = input.toLowerCase();

  if (index == 0 && text.length > 0 && prompts.includes(text)) {
    product = questions[index]
    askMeaningful(input, product);
    index += 1;
  } else if (index == 1 && text.length > 0 && numbers.includes(text)) {
    localStorage.setItem("meaningful", input)
    product = questions[index];
    askMood(input, product);
    index += 1;
  } else if (index == 2 && text.length > 0 && numbers.includes(text)) {
    localStorage.setItem("happy1", input)
    product = questions[index];
    addChat(input, product);
    index += 1;
  } else if (index == 3 && text.length > 0 && numbers.includes(text)) {
    localStorage.setItem("angry1", input)
    product = questions[index];
    addChat(input, product);
    index += 1;
  } else if (index == 4 && text.length > 0 && numbers.includes(text)) {
    localStorage.setItem("sad1", input)
    product = questions[index];
    askMoodItems(input, product);
    index += 1;
  } else if (index == 5 && text.length > 0 && numbers.includes(text)) {
    localStorage.setItem("anxious1", input)
    product = questions[index];
    addChat(input, product);
    index += 1;
  } else if (index == 6 && text.length > 0 && numbers.includes(text)) {
    localStorage.setItem("angry2", input)
    product = questions[index];
    addChat(input, product);
    index += 1;
  } else if (index == 7 && text.length > 0 && numbers.includes(text)) {
    localStorage.setItem("happy2", input)
    product = questions[index];
    askMoodItems(input, product);
    index += 1;
  } else if (index == 8 && text.length > 0 && numbers.includes(text)) {
    localStorage.setItem("anxious2", input)
    product = questions[index];
    addChat(input, product);
    index += 1;
  } else if (index == 9 && text.length > 0 && numbers.includes(text)) {
    localStorage.setItem("sad2", input)
    product = questions[index];
    askThought_w_pic(input, product);
    index += 1;
  } else if (index == 10 && text.length > 0 && numbers.includes(text)) {
    localStorage.setItem("mindfulness1", input)
    product = questions[index];
    addChat(input, product);
    index += 1;
  } else if (index == 11 && text.length > 0 && numbers.includes(text)) {
    localStorage.setItem("mindfulness2", input)
    product = questions[index];
    addChat(input, product);
    index += 1;
  } else if (index == 12 && text.length > 0 && numbers.includes(text)) {
    localStorage.setItem("decentering1", input)
    product = questions[index];
    askThought_w_pic(input, product);
    index += 1;
  } else if (index == 13 && text.length > 0 && numbers.includes(text)) {
    localStorage.setItem("decentering2", input)
    product = questions[index];
    addChat(input, product);
    index += 1;
  } else if (index == 14 && text.length > 0 && numbers.includes(text)) {
    localStorage.setItem("reappraisal1", input)
    product = questions[index];
    addChat(input, product);
    index += 1;
  } else if (index == 15 && text.length > 0 && numbers.includes(text)) {
    localStorage.setItem("reappraisal2", input);
    product = questions[index];
    askThought_w_pic(input, product);
    index += 1;
  } else if (index == 16 && text.length > 0 && numbers.includes(text)) {
    localStorage.setItem("lifesatisfaction1", input)
    product = questions[index];
    addChat(input, product);
    index += 1;
} else if (index == 17 && text.length > 0) {
    localStorage.setItem("lifesatisfaction2", input);
    product = "Thank you for answering all of the questions. I'm calculating your scores now...\nType 'next' to view your results.";
    botTalk(input, product);
    index += 1;
} else if (index == 18 && text.length > 0 && next.includes(text)) {
    let happy1 = Number(localStorage.getItem("happy1"));
    let happy2 = Number(localStorage.getItem("happy2"));
    let sad1 = Number(localStorage.getItem("sad1"));
    let sad2 = Number(localStorage.getItem("sad2"));
    let anxious1 = Number(localStorage.getItem("anxious1"));
    let anxious2 = Number(localStorage.getItem("anxious2"));
    let angry1 = Number(localStorage.getItem("angry1"));
    let angry2 = Number(localStorage.getItem("angry2"));
    let meaningful = Number(localStorage.getItem("meaningful"));
    let mindfulness1 = Number(localStorage.getItem("mindfulness1"));
    let mindfulness2 = Number(localStorage.getItem("mindfulness2"));
    let decentering1 = Number(localStorage.getItem("decentering1"));
    let decentering2 = Number(localStorage.getItem("decentering2"));
    let reappraisal1 = Number(localStorage.getItem("reappraisal1"));
    let reappraisal2 = Number(localStorage.getItem("reappraisal2"));
    let lifesatisfaction1 = Number(localStorage.getItem("lifesatisfaction1"));
    let lifesatisfaction2 = Number(localStorage.getItem("lifesatisfaction2"));
    let moodindex = Math.round((happy1 + happy2)/2 - (sad1+sad2+anxious1+anxious2+angry1+angry2)/6);
    let mindfulness = mindfulness1 + mindfulness2;
    let decentering = decentering1 + decentering2;
    let reappraisal = reappraisal1 + reappraisal2;
    let lifesatisfaction = lifesatisfaction1 + lifesatisfaction2;

    product = "Your portfolio is ready:\n" + "Overall Life Satisfaction: " + lifesatisfaction + " out of 14;" + "\nMeaningfulness: " + meaningful + " out of 7;" + "\nMood Index: " + moodindex + " out of 6;" + "\nMindfulness: " + mindfulness + " out of 14;" + "\nPresent Moment Awareness: " + decentering + " out of 14;" + "\nPositive Thinking: " + reappraisal + " out of 14;" + "\nType 'next' to proceed."
    botTalk(input, product);
    index += 1;

  } else if (index == 19 && text.length > 0) {
    product = "Based on your scores, we recommend a brief (2-min) mindfulness exercise to help you get unstuck from your emotions and thoughts, and be at the present moment.\nType 'next' to start."
    botTalk(input, product);
    index += 1;
  } else if (index == 20 && text.length > 0) {
    product = "Mindful Breathing"
    text = "Type 'done' to proceed."
    mindfulAudio(input, product)
    setTimeout(() => {
        chatbot_introduce(text)
      }, 113000)
      index += 1;
  } else if (index == 21 && text.length > 0 && done.includes(text)) {
      product = questions[index];
      botTalk(input, product);
      index += 1;
    } else if (index == 22 && text.length > 0) {
        product = questions[index];
        botTalk(input, product);
        index += 1;
  } else if (index == 23 && text.length > 0) {
    localStorage.setItem("rating", input);
    let rating = Number(localStorage.getItem("rating"));
    if (rating > 6) {
      //randomly select one to end the conversaiton
      product = questions[index][Math.floor(Math.random() * questions[index].length)] + "\nPlease leave some comments for my future improvements :)";
    } else if (rating < 7){
      product = "I'm sorry that your interaction with me was not as good as I thought. Please leave some feedback so I could improve in the future."
    }
    addChat(input, product);
    index += 1;
  } else if (index == 24) {
    product = "Thank you again for chatting with me today! \nYou may close the window now.";
    addChat(input, product);
  }
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);

  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000)

}

function askMeaningful(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);

  let scaleImg = document.createElement("img");
  scaleImg.className = "scale";
  scaleImg.src = "meaningful_scale.png"

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000)

  // Fake delay to seem "real"
  setTimeout(() => {
    messagesContainer.appendChild(scaleImg)}, 2000)

  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
}

function askMood(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let moodImg = document.createElement("img");
  moodImg.src = "never_always.png"
  moodImg.className = "scale";
  moodImg.id = "moodscale";

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);

  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000)

  setTimeout(() => {
    messagesContainer.appendChild(moodImg)}, 2000)

  // Keep messages at most recent
  setTimeout(() => {
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.offsetHeight}, 2000)
}

function askMoodItems(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let moodImg = document.createElement("img");
  moodImg.src = "never_always.png"
  moodImg.className = "scale";
  messagesContainer.appendChild(moodImg)

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);

  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.offsetHeight

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000)

}

function askThought_w_pic(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let thoughtImg = document.createElement("img");
  thoughtImg.src = "disagree_agree.png";
  thoughtImg.className = "scale";
  messagesContainer.appendChild(thoughtImg)

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);


  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000)

  // Keep messages at most recent
  setTimeout(() => {
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.offsetHeight}, 10)
}


function mindfulAudio(input, product) {
    const messagesContainer = document.getElementById("messages");

    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
    messagesContainer.appendChild(userDiv);

    let botDiv = document.createElement("div");
    let botImg = document.createElement("img");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botImg.src = "bot-mini.png";
    botImg.className = "avatar";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    botDiv.appendChild(botImg);
    messagesContainer.appendChild(botDiv);

    let backgroundImg = document.createElement("img");
    backgroundImg.src = "background.jpg";
    backgroundImg.className = "scale";

    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

    setTimeout(() => {
      messagesContainer.appendChild(backgroundImg)
    }, 2000)

    let practiceAudio = document.createElement("audio");
    practiceAudio.src = "MindfulBreathing.mp3";
    practiceAudio.className = "scale";
    messagesContainer.appendChild(practiceAudio)
    setTimeout(() => {
      practiceAudio.play();
    }, 3000)

    // Fake delay to seem "real"
    setTimeout(() => {
      botText.innerText = `${product}`;
      textToSpeech(product)
    }, 1500)
    // Keep messages at most recent
    setTimeout(() => {
      messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.offsetHeight}, 2000)
}


function chatbot_introduce(product) {
  const messagesContainer = document.getElementById("messages");

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000)
}

function botTalk(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);

  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000)

  setTimeout(() => {
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  }, 2000)

}
