export default (state = {}, action)=>{
    if (action.type === 'update') {
        return action.payload.data
    } else if (action.type === 'remove') {
        return action.payload.data
    }
    return state
}