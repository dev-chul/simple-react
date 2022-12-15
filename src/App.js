import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

import NaviBar from './containers/NaviBar';
import Home from './containers/Home'
import Calendar from './containers/Calendar'

/**
 * 참고사이트: https://velog.io/@velopert/react-router-v6-tutorial
 * 비고: BrowserRouter VS HashRouter Vue 설정 때와 마찬가지로 새로고침에 대응하기 위함.
 */
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
