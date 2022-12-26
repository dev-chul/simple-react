export const GET_MENU = 'navi/GET_MENU';

export const getMenu = clickIdx => {
    return {
        type: GET_MENU,
        //일치-2
        idx: clickIdx,
    };
};

const initialState = {
    //일치-1
    idx: 0,
};

function naviReducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_MENU:
            return {
                ...state,
                //일치-3
                idx: action.idx,
            };

        default:
            return state;
    }
}

export default naviReducer;
