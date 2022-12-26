import { combineReducers } from '@reduxjs/toolkit';

import counter from './counter';
import auth from './auth';
import navi from './navi';

const rootReducer = combineReducers({
    counter,
    auth,
    navi,
});

export default rootReducer;
