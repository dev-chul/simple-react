export const SET_LOCATION = 'loading/SET_LOCATION';

export const setLocation = param => {
    return {
        type: SET_LOCATION,
        x: param.x,
        y: param.y,
    };
};

const initialState = {
    x: 0,
    y: 0,
};

function locationReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_LOCATION:
            return {
                ...state,
                x: action.x,
                y: action.y,
            };

        default:
            return state;
    }
}

export default locationReducer;
