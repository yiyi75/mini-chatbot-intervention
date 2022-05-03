/*PSS questionnaire*/
var Mood_items = [
    "1 - Almost Never",
    "2 - Very Rarely",
    "3 - Rarely",
    "4 - Sometimes",
    "5 - Often",
    "6 - Very Often",
    "7 - Almost Always"
  ];

var Mood = {
        type: 'survey-likert',
        preamble:   '<p>How much did you experience the following feelings in the past 24 hours? </p>',
        questions: [

          {prompt: "I felt angry.", name: 'Mood_01', labels: Mood_items, required: true},
          {prompt: "I felt happy.", name: 'Mood_02', labels: Mood_items, required: true},
          {prompt: "I felt anxious.", name: 'Mood_03', labels: Mood_items, required: true},
          {prompt: "I felt worried.", name: 'Mood_04', labels: Mood_items, required: true},
          {prompt: "I felt irritated.", name: 'Mood_05', labels: Mood_items, required: true},
          {prompt: "I felt cheerful.", name: 'Mood_06', labels: Mood_items, required: true},
          {prompt: "I felt depressed.", name: 'Mood_07', labels: Mood_items, required: true},
          {prompt: "I felt sad.", name: 'Mood_08', labels: Mood_items, required: true},
        ],
    //reverse scores 4, 5, 7, 8
    // on_finish: function(data){
    //     pData.Mood_01 = data.response.Mood_01;
    //     pData.Mood_02 = data.response.Mood_02;
    //     pData.Mood_03 = data.response.Mood_03;
    //     pData.Mood_04 = data.response.Mood_04;
    //     pData.Mood_05 = data.response.Mood_05;
    //     pData.Mood_06 = data.response.Mood_06;
    //     pData.Mood_07 = data.response.Mood_07;
    //     pData.Mood_08 = data.response.Mood_08;
    //     pData.PosAffect = data.response.Mood_02 + data.response.Mood_06;
    //     pData.NegAffect = data.response.Mood_01 + data.response.Mood_03 + data.response.Mood_04 + data.response.Mood_05 + data.response.Mood_07 + data.response.Mood_08;
    // },
};

var Mood_node ={
    timeline: [Mood],
    // on_timeline_finish: function(){
    //     saveSessionData2("mood");
    //   },
 };
