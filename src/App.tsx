
import { Toaster } from 'react-hot-toast'
import Form from './Component/Form'
import { Route, Routes } from 'react-router-dom'
import Submission from './Component/Submission'

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Form/>}/>
    <Route path='/submission' element={<Submission/>}/>
   </Routes>
   <Toaster/>
  
    </>
  )
}

export default App
