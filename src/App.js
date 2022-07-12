import { useState } from 'react';
import { button } from './App.css'

let App = () => {

  let questions = [
    {
      questionText: 'Кто зеленеет в Мстителях?',
      answerOptions: [
        { answerText: 'Ванда', isCorrect: false },
        { answerText: 'Халк', isCorrect: true },
        { answerText: 'Тор', isCorrect: false },
        { answerText: 'Луи Де Финес', isCorrect: false }
      ]
    },
    {
      questionText: 'Любимое блюдо-слово Дедпула?',
      answerOptions: [
        { answerText: 'Лапша', isCorrect: false },
        { answerText: 'Селёдка под шубой', isCorrect: false },
        { answerText: 'Маскарпоне', isCorrect: false },
        { answerText: 'Чимичанга', isCorrect: true }
      ]
    },
    {
      questionText: 'Продолжите фразу: "Кто не работает, тот .."',
      answerOptions: [
        { answerText: 'Петух', isCorrect: false },
        { answerText: 'Лентяй', isCorrect: false },
        { answerText: 'Ест', isCorrect: true },
        { answerText: 'Милиционер', isCorrect: false },
        
      ]
    },
    {
      questionText: 'Когда празднуется НГ?',
      answerOptions: [
        { answerText: '1 апреля', isCorrect: false },
        { answerText: '8 марта', isCorrect: false },
        { answerText: '47 сентября', isCorrect: false },
        { answerText: '31 декабря', isCorrect: true }
      ]
    },
    {
      questionText: 'Что делают растения?',
      answerOptions: [
        { answerText: 'Фотосинтез', isCorrect: true },
        { answerText: 'Фотобизнес', isCorrect: false },
        { answerText: 'Фотоанализ', isCorrect: false },
        { answerText: 'А можно другой вопрос?', isCorrect: false }
      ]
    }
  ]

  let [currentQquestion, setcurrentQquestion] = useState(0)
  let [score, setScore] = useState(0)
  let [showScore, setShowScore] = useState(false)

  let handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    let nextQquestion = currentQquestion + 1
    if (nextQquestion < questions.length) {
      setcurrentQquestion(nextQquestion)
    } else {
      setShowScore(true)
    }


  }

  let refresh = () => {
    setcurrentQquestion(0)
    setScore(0)
    setShowScore(false)
  }

let rezult = () => {
  if (score === 5) {
    return (
      <div>Разблокировано достижение: "Невпупеть какой умный"</div>
    ) 
  } else if (score === 4) {
    return (
      <div>Ты был близок, прям рядом</div>
    ) 
  } else if (score === 3) {
    return (
      <div>Ты старался, но недостаточно</div>
    ) 
  } else if (score === 2) {
    return (
      <div>Плохо, давай еще раз</div>
    ) 
  } else if (score <= 1) {
    return (
      <div>Едрить, вы, сударь - бездарь !</div>
    ) 
  }
}
 

  return (

    <div className='App'>


      {
        showScore 
          ? <div>
            <div>
              <h1>Правильных ответов {score} из {questions.length} {rezult()}</h1>
              
            </div>
            <button className='button'
              onClick={refresh}>Начать сначала</button>
          </div>
          : <div>
            <div>
              <span>
                <h1>Вопрос {currentQquestion + 1}  / {questions.length}</h1>
              </span>
              <div>{questions[currentQquestion].questionText} </div>
            </div>
            {questions[currentQquestion].answerOptions.map(item => (
              <button className='button'
                onClick={() => handleAnswerOptionClick(item.isCorrect)}
              >{item.answerText}</button>
            )
            )}
          </div>
      }


    </div>
  );
}



export default App;