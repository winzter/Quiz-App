import React, { useContext } from 'react'
import { DataContext } from '../App'
import QuestionsData from '../data/QuestionData'

function Score() {

  const {score,setScore,setAppState} = useContext(DataContext)

  const Restart = () => {
    setScore(0)
    setAppState("menu")
  }

  return (
    <div className='score'>
      <h1>Score</h1>
      <h2>{score} / {QuestionsData.length}</h2>
      <button onClick={() => {Restart()}}>Restart</button>
    </div>
  )
}

export default Score