class Question {
  constructor(text, image, choices, answer) {
    this.text = text;
    this.image = image;
    this.choices = choices;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return choice === this.answer;
  }
}

const questions = [
  new Question(
    "De quelle divinité égyptienne Moon Knight tire t-il ses pouvoirs ?",
    "https://media.ngroup.be/IMAGE/IMAGE-S1-00019/109966-moon-knight-marvel.png",
    ["Taweret", "Khonshu", "Horus", "Ammit"],
    "Khonshu"
  ),
  new Question(
    "Dans le SpiderVerse, où les Héritiers sont-ils laissés par les Spider-Men après le premier combat",
    "https://depor.com/resizer/EYiG79arJODwoE9r2CJ5E3vZ-QI=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OLILFUTH6BB2XCZI3GZAD35QSQ.jpg",
    ["La Terre-3145 (radioactive)", "Un bunker en acier renforcé", "La Terre-001 (Monde originel du tisseur)", "Dans le labo de Spiderman Supérieur"],
    "La Terre-3145 (radioactive)"
  ),
  new Question(
    "Dans la série Ms.Marvel, comment Kamala optient-elle ses pouvoirs ?",
    "https://irishcinephile.files.wordpress.com/2020/09/tv-news-ms.-marvel-iman-vellani-cast-as-kamala-khan-for-marvel-series-at-disney.jpg",
    ["Une décharge d'énergie cosmique", "Avec la technologie Stark", "Lors d'une viste d'un ancien temple mythique", "Un mysterieux bracelet ancestral"],
    "Un mysterieux bracelet ancestral"
  ),
  new Question(
    "Quels sont les noms de héros des deux enfant de Wanda ?",
    "https://static.hitek.fr/img/actualite/ill_m/1566612616/tommybillycopie.jpg",
    ["Mantra & Silver", "Telepath & Light", "Wiccan & Speed", "Vision & Bolt"],
    "Wiccan & Speed"
  ),
];


class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  guess(answer) {

    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++

    }
    this.currentQuestionIndex++



  }

  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }

}

// Affichage
const display = {
  elementShown: function (id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },

  imageQuestion: function (image) {
    let elementImage = document.querySelector("#imgQuestion");
    if (image !== "none") { elementImage.innerHTML = `<img src="${image}" alt="oui"/>` } else {
      elementImage.innerHTML = "";
    }

  },


  question: function () {
    this.elementShown("question", quiz.getCurrentQuestion().text);
    this.imageQuestion(quiz.getCurrentQuestion().image)
  },
  choices: function () {
    let choices = quiz.getCurrentQuestion().choices;

    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function () {
        quiz.guess(guess);
        quizApp();
      }
    }
    // Affichage des choix + prise en compte du choix
    for (let i = 0; i < choices.length; i++) {
      this.elementShown("choice" + i, choices[i]);
      guessHandler('guess' + i, choices[i]);
    }
  },
  progress: function () {
    this.elementShown("progress", `Question ${quiz.currentQuestionIndex + 1} sur ${quiz.questions.length}`);
  },

  endQuiz: function () {
    let endQuizHTML =
      `
    <h1>Quiz terminé</h1>
    <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>
    `
    this.elementShown('quiz', endQuizHTML);
  }

}

// Logique du quiz
quizApp = () => {
  if (quiz.hasEnded()) {
    //fin
    display.endQuiz();


  } else {
    // Aficher les questions et progression
    display.question();
    display.choices();
    display.progress();
  }
}


// Quiz

let quiz = new Quiz(questions);
quizApp();