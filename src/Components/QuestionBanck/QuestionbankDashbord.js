import React from 'react'
import QuestionbankNav from './QuestionbankNav/QuestionbankNav'
import { Outlet } from 'react-router-dom'

 function QuestionbankDashbord() {
  return (
    <div>
      <QuestionbankNav></QuestionbankNav>
      <Outlet></Outlet>
    </div>
  )
}


export default QuestionbankDashbord