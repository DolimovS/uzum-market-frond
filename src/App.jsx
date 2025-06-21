import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'

import './App.css'
import Elektronika from './components/Elektronika/Elektronika'
import OneProduct from './OneProduct/OneProduct'
import Krasovka from './components/Krasovka/Krasovka'
import Zargarlik from './components/Zargarlik/Zargarlik'
import UyRozgorBuyumlari from './components/UyRozgorBuyimlari/UyRozgorBuyimlari'
import Home from './components/Home/Home'
import SavatProduct from './SavatProduct/SavatProduct'

function App() {

  return (
    <div className="container">
      <Header/>
        <Routes>
          <Route path='home' element={<Home/>} />
          <Route path='elektronika' element={<Elektronika/>} />
          <Route path='/krasovka' element={<Krasovka/>} />
          <Route path='/zargarlikBuyumlari' element={<Zargarlik/>} />
          <Route path='/uyRozgorBuyumlari' element={<UyRozgorBuyumlari/>} />
          <Route path='/savat' element={<SavatProduct/>} />
          
          <Route path='/oneProduct/:id' element={<OneProduct/>}/>
        </Routes>
    </div>
  )
}

export default App
