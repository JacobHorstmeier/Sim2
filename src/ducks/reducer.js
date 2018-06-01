const intitialState = {
   answers: []
}

const ADD_ANSWER = 'ADD_ANSWER'

export function addAnswer(answer) {
    return {
        type: ADD_ANSWER,
        payload: answer
    }
}

function reducer( state=intitialState, action) {
    switch( action.type){
        case ADD_ANSWER:
            return Object.assign({}, state, {answers: action.payload})


        default: return state;
    }
}

export default reducer