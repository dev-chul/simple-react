import { Routes, Route, HashRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NaviBar from './components/NaviBar';
import Home from './containers/Home';
import MyCalendar from './containers/MyCalendar';
import MyCalculator from './containers/MyCalculator';
import Bitcoin from './containers/Bitcoin';
import Portfolio from './containers/Portfolio';
import Meal from './containers/Meal';
import Loading from './components/Loading';

/**
 * 참고사이트: https://velog.io/@velopert/react-router-v6-tutorial
 * 비고: BrowserRouter VS HashRouter Vue 설정 때와 마찬가지로 새로고침에 대응하기 위함.
 */
function App() {
    const { isLoading } = useSelector(state => state.loading);

    return (
        <>
            {isLoading ? <Loading /> : null}
            <div className="App">
                <HashRouter>
                    <NaviBar />
                    <div className="App-Wrap">
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route
                                path="/bitcoin"
                                element={<Bitcoin />}
                            ></Route>
                            <Route path="/meal" element={<Meal />}></Route>
                            <Route
                                path="/portfolio"
                                element={<Portfolio />}
                            ></Route>
                            <Route
                                path="/calendar"
                                element={<MyCalendar />}
                            ></Route>
                            <Route
                                path="/calculator"
                                element={<MyCalculator />}
                            ></Route>
                        </Routes>
                    </div>
                </HashRouter>
            </div>
        </>
    );
}

export default App;
