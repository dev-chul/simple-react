import { combineReducers } from '@reduxjs/toolkit';

import counter from './counter';
import auth from './auth';

const rootReducer = combineReducers({
    counter,
    auth,
});

export default rootReducer;
