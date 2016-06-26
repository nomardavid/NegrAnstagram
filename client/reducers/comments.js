function postcomments(state = [], action) {
    // console.log(state, action);
    switch (action.type) {
        case 'ADD_COMMENT':
         // return the new state with the new comments
         return [...state,{
             user: action.author,
             text: action.comment
         }];
        case 'REMOVE_COMMENT':
            console.log("removing a comment");
            return state; 
        default:
            return state;
    }
    return state;
}

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            // take the current state
            ...state,
            // overwrite this post with a new one
            [action.postId]: postcomments(state[action.postId], action)
        }
    }
    return state;
}

function comments(state = [], action) {
    // console.log(state, action);
    return state;
}

export default comments;