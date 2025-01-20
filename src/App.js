import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Info from './Pages/Info/Info'
import QuizApp from './Pages/QuizApp/QuizApp'
import ReportPage from './Pages/ReportPage/ReportPage'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Info/>}></Route>
      <Route path='/quizapp' element={<QuizApp/>}></Route>
      <Route path='/report' element={<ReportPage/>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
