import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Posts from './pages/Posts.jsx';
import DefaultLayout from './pages/DefaultLayout.jsx';
import ArticleDetails from './pages/ArticleDetails.jsx';


function App({ api_server, end_point }) {



  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />

            <Route path='/posts' >
              <Route index element={<Posts api_server={api_server} end_point={end_point} />} />
              <Route path=':slug/' element={<ArticleDetails api_server={api_server} end_point={end_point} />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
