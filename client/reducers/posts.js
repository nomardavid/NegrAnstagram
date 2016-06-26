// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current this.state.

function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
        console.log("increment like!");
        //return the updated state
        const i = action.index;
        return [
            ...state.slice(0,i) , //before the we are updating
            {...state[i], likes: state[i].likes + 1},
            ...state.slice(i + 1), //affter the one we are updating
        ]
        
        break;
    
        default:
        return state;
    }
}

export default posts;