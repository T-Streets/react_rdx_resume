export default function(state = [], action) {
    switch(action.type){
        case 'FETCH_GITHUB':
            return [action.payload.data, ...state]
    }
    return state
}

