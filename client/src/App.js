import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskForms from './components/TaskForms'
import TaskList from './components/TaskList'
import {Container} from '@mui/material'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Container>
    <Routes>
      
      <Route path='/' element={<TaskList/>}/>
      <Route path='/tasks/new' element={<TaskForms/>}/>
      <Route path='/tasks/:id/edit' element={<TaskForms/>}/>
      
    </Routes>
    </Container>
    </BrowserRouter>
  )
}
