import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

import NaviBar from './containers/NaviBar';
import Home from './containers/Home'
import Calendar from './containers/Calendar'

// https://velog.io/@velopert/react-router-v6-tutorial
function App() {
  return (
    <div className="App">
      <HashRouter>
        <NaviBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/calendar' element={<Calendar />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
