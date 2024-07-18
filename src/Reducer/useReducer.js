export const initialState = JSON.parse(localStorage.getItem('IsUserLoggedIn')) || false
export const reducer = (state, action) => {
    if (action.type === "USER") {
        localStorage.setItem('IsUserLoggedIn', JSON.stringify(action.payload))
        return action.payload
    }
    return state
}
