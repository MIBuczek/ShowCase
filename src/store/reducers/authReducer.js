const initState = {
    id : null,
    authError: null
  }
  
const authReducer = (state = initState, action) => {
switch(action.type){
    case 'LOGIN_ERROR':
        return {
            ...state,
            authError: 'Login failed'
        }
    case 'LOGIN_SUCCESS':
        return {
            ...state,
            authError: null
        }
    case 'SIGNOUT_SUCCESS':
        return state;

    case 'SIGNUP_SUCCESS':
        return {
            ...state,
            id: action.resp,
            authError: null
        }

    case 'SIGNUP_ERROR':
        return {
            ...state,
            authError: action.err.message
        }
    case 'UPDATE_PRFILE_SUCCESS' : 
        return{
            ...state,
            authError: null
        }
    case 'EDIT_CONTACT_ERROR':
        return{
            ...state,
            authError: action.err.message
        }
    default:
        return state
    }
};

export default authReducer;