import Loading from './components/Loading';
import React, {lazy, Suspense} from "react"
import {Route, Routes} from "react-router-dom"
import PageNotFound from './pages/PageNotFound';

const Home = lazy(()=> import("./pages/Home"))
const Login = lazy(()=> import("./pages/Login"))
const Quotes = lazy(()=> import('./pages/Quotes'))

function App() {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/quotes" element={<Quotes/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
