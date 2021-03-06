import React, { Component } from 'react';
import { QuizData } from './QuizData';
import './Quiz.css';
import { NavLink } from 'react-router-dom';

export class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userAnswer: null, //current users answer
      currentIndex: 0, //current questions index
      options: [], //the four options
      quizEnd: false, //determines if it's the last question
      score: 0, //holds the score
      disabled: true, // determines the status of the buttons
    };
  }

  //Component that holds the current quiz
  loadQuiz = () => {
    const { currentIndex } = this.state; //get the current question index
    this.setState(() => {
      return {
        question: QuizData[currentIndex].question,
        options: QuizData[currentIndex].options,
        answer: QuizData[currentIndex].answer,
      };
    });
  };
  nextQuestionHander = () => {
    const { userAnswer, answer, score } = this.state;

    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      userAnswer: null,
    });
  };
  componentDidMount() {
    this.loadQuiz();
  }
  //Check the answer
  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;
    if (this.state.currentIndex !== prevState.currentIndex) {
      this.setState(() => {
        return {
          question: QuizData[currentIndex].question,
          options: QuizData[currentIndex].options,
          answer: QuizData[currentIndex].answer,
        };
      });
    }
  }

  finishHandler = () => {
    if (this.state.currentIndex === QuizData.length - 1) {
      this.setState({
        quizEnd: true,
      });
    }
  };
  render() {
    const { question, options, currentIndex, userAnswer, quizEnd } = this.state; //get the current state

    if (quizEnd) {
      return (
        <div className="finalTemplate">
          <h1>Game Over. Final score is {this.state.score} point(s)</h1>
          <h4>The correct answers for the quiz are: </h4>
          <ul>
            {QuizData.map((item, index) => (
              <li className='options' key={index}>
                {item.answer}
              </li>
            ))}
          </ul>
          <NavLink to={'/'}>
                        <button className="restart-button">Restart</button>
                    </NavLink>
        </div>
      );
    }
    return (
      <div>
        <h2>{question}</h2>
        <span>{`Question ${currentIndex + 1} of ${QuizData.length}`}</span>
        {options.map(
          (
            option //for each option, new paragraph
          ) => (
            <p
              key={option.id}
              className={`options ${userAnswer === option ? 'selected' : null}`}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          )
        )}
        {currentIndex < QuizData.length - 1 && (
          <button className="next-button"
            disabled={this.state.disabled}
            onClick={this.nextQuestionHander}
          >
            Next Question
          </button>
        )}
        {currentIndex === QuizData.length - 1 && (
          <button className="finish-button" onClick={this.finishHandler} disabled={this.state.disabled}>
            Finish
          </button>
        )}
      </div>
    );
  }
}

export default Quiz;
