let index = 0;

const prompts = ["yes", "ok", "sure", "yeah", "i guess", "maybe", "would love to", "of course", "why not", "definitely", "certainly"]

const numbers = ["1", "2", "3", "4", "5", "6", "7"]

const next = ["next"]

const done = ["done"]

// ordered questions
questions = [
  ["Excellent!\n\nHow meaningful does your life feel now?\n (Type NUMBER only)"], //0 meaningful
  ["How much did you experience the following feelings in the past 24 hours?\n\nI felt happy."], //1 happy 1
  ["I felt angry."], //2 angry 1
  ["I felt depressed."], //3 sad 1
  ["I felt anxious."], //4 anxious 1
  ["I felt irritated."], //5 angry 2
  ["I felt cheerful."], //6 happy 2
  ["I felt worried."], //7 anxious 2
  ["I felt sad."], //8 sad 2
  ["I can find words to describe my feelings right now."],//9 Mindfulness1
  ["I am daydreaming, worrying, or otherwise distracted."], //10 mindfulness 2
  ["I can watch my thoughts and emotions come and go like clouds."], //11 decentering 1
  ["My sense of self was separate from my changing thoughts and feelings."], //12 decentering 2
  ["I tried to look for something positive in what happened."], //13 reappraisal 1
  ["I tried to think of positive aspects."], //14 reappraisal 2
  ["In most ways my life is close to my ideal."], //15 life satisfaction 1
  ["I am satisfied with life."], //16 life satisfaction 2
  [""], //17
  [""], //18
  [""], //19
  [""], //20
  ["Please write done some of your thoughts after this brief excercise. E.G., I felt calm; I could better focus on my task now..."], //21
  ["How would you rate your overall interaction experience with me? (1-Horrible  -- 10-Excellent!)"],//22
  ["Nice talking to you too!", "I really enjoyed our conversation too!", "Thank you! I'm very flattered."], //23
]
