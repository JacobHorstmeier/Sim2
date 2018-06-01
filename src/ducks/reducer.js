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



        default: return state;
    }
}

export default reducer