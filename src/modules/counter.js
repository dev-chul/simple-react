//ducks pattern 규칙
/*
 * 1. 항상 reducer()란 이름의 함수를 export default 해야한다.
 * 2. 항상 모듈의 action 생성자들을 함수형태로 export 해야한다.
 * 3. 항상 npm-module-or-app/reducer/ACTION_TYPE 형태의 action 타입을 가져야한다.
 * 4. 어쩌면 action 타입들을 UPPER_SNAKE_CASE로 export 할 수 있습니다.
 * → 외부 reducer가 해당 action들이 발생하는지 계속 기다리거나, 재사용할 수 있는 라이브러리로 퍼블리싱할 경우.
 */
// ----------------------액션 타입 작성----------------------
export const PLUS_COUNTER = 'counter/PLUS_COUNTER';
export const MINUS_COUNTER = 'counter/MINUS_COUNTER';
export const CLEAR_COUNTER = 'counter/CLEAR_COUNTER';
// 규칙 2번 참고

// ----------------------액션 함수 작성----------------------
export const plusCounter = () => {
    return {
        type: PLUS_COUNTER,
    };
};

export const minusCounter = () => {
    return {
        type: MINUS_COUNTER,
    };
};

export const clearCounter = () => {
    return {
        type: CLEAR_COUNTER,
    };
};

// ----------------------초기 상태 작성----------------------

const initialState = {
    count: 0,
};

// -----------------------리듀서 작성------------------------
function counterReducer(state = initialState, action = {}) {
    switch (action.type) {
        case PLUS_COUNTER:
            return {
                ...state,
                count: state.count + 1,
            };

        case MINUS_COUNTER:
            return {
                ...state,
                count: state.count - 1,
            };

        case CLEAR_COUNTER:
            return {
                ...state,
                count: 0,
            };

        default:
            return state;
    }
}

export default counterReducer;
