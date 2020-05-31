
export const createContact = (contact) => {
    return (dispatch, getState, { getFirebase, getFirestore })=>{

        dispatch({ type : 'CREATE_CONTACT_SUCCESS', contact})
    }
};