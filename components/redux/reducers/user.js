const initailState = {
    currentUser: null
}


export const user =(state=initailState,action)=>{
    return {
        ...state,
        currentUser: action.currentUser
    }
}
