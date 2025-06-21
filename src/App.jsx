import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'

import './App.css'
import Slider from './components/Slider/Slider'
import Elektronika from './components/Elektronika/Elektronika'
import OneProduct from './OneProduct/OneProduct'

function App() {

  return (
    <div className="container">
      <Header/>
        <Routes>
          <Route path='elektronika' element={<Elektronika/>} />
          <Route path='slider' element={<Slider/>}/>
          <Route path='/pruduct:/id' element={<OneProduct/>}/>
        </Routes>
    </div>
  )
}

export default App
