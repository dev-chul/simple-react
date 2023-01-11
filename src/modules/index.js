import { combineReducers } from '@reduxjs/toolkit';

import counter from './counter';
import auth from './auth';
import navi from './navi';
import loading from './loading';

const rootReducer = combineReducers({
    counter,
    auth,
    navi,
    loading,
});

export default rootReducer;
