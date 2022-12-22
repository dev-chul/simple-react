export const GET_TOKEN = 'auth/GET_TOKEN';

export const getToken = token => {
    return {
        type: GET_TOKEN,
        data: token,
    };
};

const initialState = {
    accessToken: '',
};

function authReducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_TOKEN:
            return {
                ...state,
                accessToken: action.data,
            };

        default:
            return state;
    }
}

export default authReducer;
