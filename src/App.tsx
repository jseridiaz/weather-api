import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './core/pages/Home/Home'
import Header from './core/Components/Molecules/Header/Header'
import NotFound from './core/Components/Organics/NotFound/Notfound'
import SearchWeather from './core/pages/SearchWeather/SearchWeather'
import About from './core/pages/About/About'

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' index element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route
          path='/search-weather'
          element={<SearchWeather></SearchWeather>}
        ></Route>
        <Route path='/about-us' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  )
}

export default App
