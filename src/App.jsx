import './App.css';

import AppHeader from './components/AppHeader.jsx';
import AppMain from './components/AppMain.jsx';
import AppFooter from './components/AppFooter.jsx';

import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Posts from './pages/Posts.jsx';
import DefaultLayout from './pages/DefaultLayout.jsx';





function App() {


  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/posts' element={<Posts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
