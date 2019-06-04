//校验输入框的reducer
export const pageReducer = function(state={errorMsg:''},action) {

    switch (action.type) {
        case 'CHANGE_ERROR_MESSAGE':
            console.log("action==",action);
            return Object.assign({}, state, {
                errorMsg: action.errorMsg
            })

        default:
            return state
    }

}
