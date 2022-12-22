import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import rootReducer from './modules';

const root = ReactDOM.createRoot(document.getElementById('root'));

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});

const persistor = persistStore(store);

// React.StrictMode를 사용할 경우 개발단계 시 오류를 잡기 위해 두 번 렌더링되는 부분이 존재한다.
root.render(
    //<React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />,
        </PersistGate>
    </Provider>,
    //</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
