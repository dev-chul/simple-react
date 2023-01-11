export const SET_LOADING = 'loading/SET_LOADING';

export const setLoading = param => {
    return {
        type: SET_LOADING,
        data: param,
    };
};

const initialState = {
    isLoading: false,
};

function loadingReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.data,
            };

        default:
            return state;
    }
}

export default loadingReducer;
