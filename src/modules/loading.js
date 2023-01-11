export const SET_LOADING = 'loading/SET_LOADING';

export const setLoading = param => {
    return {
        type: SET_LOADING,
        data: param,
    };
};

const setBodyScroll = action => {
    if (action.data === true) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
};

const initialState = {
    isLoading: false,
};

function loadingReducer(state = initialState, action = {}) {
    setBodyScroll(action);
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
