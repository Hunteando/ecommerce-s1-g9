const SET_SELECT = 'SET_SELECT'

const setCurrentSelection = select =>({
    type: SET_SELECT,
    payload: select
})

const initialState = {
    select: "login"
}

export const login_registerReducer = (state = initialState, action)=>{
    const {type, payload} = action
    switch(type){
        case SET_SELECT:
            return {...state, select: payload}
        default:
            return state
    }
}